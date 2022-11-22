import { Router } from 'express'
import { carController } from '../controllers/index.js'
import { CreateCarBodyObject, GetCarByIdObject, GetCarsObject, RemoveCarObject, UpdateCarsObject } from '../validators/car.joi.js'
import { validation } from '../validators/validation.js'

const router: Router = Router()

router.post('/createCar', validation(CreateCarBodyObject), carController.createCar)
router.post('/getCarById', validation(GetCarByIdObject), carController.getCarById)
router.post('/getCars', validation(GetCarsObject), carController.getCars)
router.post('/updateCar', validation(UpdateCarsObject), carController.updateCar)
router.post('/removeCar', validation(RemoveCarObject), carController.removeCar)

export default router
