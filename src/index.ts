/* eslint-disable import/first */
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
import app from './app.js'

mongoose.connect('mongodb://root:example@192.168.1.18:2717/', (err) => {
  app.listen('3000', () => console.log('Listening on port 3000'))
  if (err != null) {
    throw new Error('Uh-oh, cannot connect to database... UwU')
  }
})
