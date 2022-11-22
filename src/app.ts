import express, { Express } from 'express'
import router from './routes/car.route.js'

const app: Express = express()

app.use(express.json())

app.use('/', router)

export default app
