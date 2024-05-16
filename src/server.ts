import express from 'express'
import payload from 'payload'

import cors from 'cors';
require('dotenv').config()
const app = express()
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})
app.use(cors({
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
}))
const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3001)
}

start()
