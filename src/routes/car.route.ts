import { Router } from 'express'
import { carController } from 'src/controllers'
import { validate } from 'src/validators/validation'

const router = Router()

router.post('/createCar/', [validate(carValidator.createUser)], carController.createCar)

export default router
