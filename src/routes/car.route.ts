import { Router } from 'express'
import { carController } from '../controllers/index'
import { ChangeColorObject, CreateCarBodyObject, GetCarByIdObject, GetCarsObject, RemoveCarObject } from '../validators/car.joi'
import { validation } from '../validators/validation'

const router: Router = Router()

router.post('/createCar', validation(CreateCarBodyObject), carController.createCar)
router.post('/getCarById', validation(GetCarByIdObject), carController.getCarById)
router.post('/getCars', validation(GetCarsObject), carController.getCars)
router.post('/changeColor', validation(ChangeColorObject), carController.changeColor)
router.post('/removeCar', validation(RemoveCarObject), carController.removeCar)

export default router
