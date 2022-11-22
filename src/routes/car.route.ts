import { Router } from 'express'
import { carController } from '../controllers/index.js'
import * as carValidator from '../validators/car.validator.js'
import { validate } from '../validators/validation.js'

const router: Router = Router()

router.post('/createCar', validate(carValidator.createCar), carController.createCar)

export default router
