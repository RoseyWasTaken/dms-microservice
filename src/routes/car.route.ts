import { Router } from 'express'
import { carController } from '../controllers/index.js'
import { createCarBody } from '../validators/car.joi.js'
// import { carController } from '../controllers/index.js'
import { validation } from '../validators/validation.js'

const router: Router = Router()

router.post('/createCar', validation(createCarBody), carController.createCar)

export default router
