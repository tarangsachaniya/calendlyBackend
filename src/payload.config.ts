import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './app/collections/Users'
import Events from './app/collections/Events'
import Scheludes from './app/collections/Schedules'
import Types from './app/collections/Types'
import payload from 'payload'


export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  endpoints: [
    {
      path: '/users/signup',
      method: 'post',
      handler: async (req,res)=>{
        const {name,email,password } = req.body;
        if (!email || !password || !name) {
          return res.status(400).json({ message: 'Email, password, and name are required.' });
        }
        try{
          const existinguser = await payload.find({
              collection:"users",
              where:{
                email:{
                  equals:email
                }
              }
          });
          if (existinguser.docs.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
          }
          const createUser = await payload.create({
            collection:"users",
            data:{
              name,email,password
            }
          });
          return res.status(201).json(createUser);
    
        }
        catch(err){

        }
      },
    },
  ],
  editor: slateEditor({}),
  collections: [Users , Events ,Scheludes,Types],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
