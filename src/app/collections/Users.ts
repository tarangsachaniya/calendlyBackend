// src/collections/Users.ts
import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'password',
      type: 'text',
      required: true,
    },
    {
      name:"events",
      type:"array",
      fields:[
        {
          name:"event",
          type:"relationship",
          relationTo:"events"
        }
      ]
    },
    {
      name:"schedules",
      type:"array",
      fields:[
        {
          name:"scheduled",
          type:"relationship",
          relationTo:"schedules"
        }
      ]
    }
    // Add other fields as needed
  ],
};

export default Users;
