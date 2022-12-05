import { Router } from 'express'
import { validator } from '../validators/validator'
import { carController } from '../controllers/index'
import { carBody, carId, carVin, colorChange, searchCar } from '../validators/car.validation'

const router: Router = Router()

router.post('/createCar', validator(carBody), carController.createCar)
router.post('/getCars', validator(searchCar), carController.getCars)
router.post('/getCarById', validator(carId), carController.getCarById)
router.post('/changeColor', validator(colorChange), carController.changeColor)
router.post('/removeCar', validator(carVin), carController.removeCar)

export default router
