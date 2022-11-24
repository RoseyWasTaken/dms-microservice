import express, { Express } from 'express'
import router from './routes'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const app: Express = express()

app.use(express.json())

app.use('/', router)

export default app

mongoose.connect('mongodb://root:example@192.168.1.18:2717/', (err) => {
  console.log('Connected to db like it\'s nothing!')
  app.listen('3000', () => console.log('Listening on port 3000'))
  if (err != null) {
    throw new Error('Uh-oh, cannot connect to database... UwU')
  }
})
