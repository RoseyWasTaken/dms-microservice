/* eslint-disable import/first */
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import express from 'express'

mongoose.connect(process.env.MONGO_URI as string, (err) => {
  if (err != null) throw new Error('Uh-oh, cannot connect to database... UwU')
})

const app = express()
const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port as string}`))

app.get('/', (req, res) => {
  res.send('<h2> Hello there general Kenobi</h2>')
})
