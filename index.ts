import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'; dotenv.config()

mongoose.connect(process.env.MONGO_URI as string) // is this async?
const app = express()
const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/', (req, res) => {
  res.send('<h2> Hello there general Kenobi</h2>')
})
