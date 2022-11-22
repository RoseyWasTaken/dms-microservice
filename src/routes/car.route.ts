import { Router } from 'express'
import { carController } from '../controllers/index.js'
import { createCarBody, getCarById, getCars, removeCar, updateCar } from '../validators/car.joi.js'
// import { carController } from '../controllers/index.js'
import { validation } from '../validators/validation.js'

const router: Router = Router()

router.post('/createCar', validation(createCarBody), carController.createCar)
router.post('/getCarById', validation(getCarById), carController.getCarById)
router.post('/getCars', validation(getCars), carController.getCars)
router.post('/updateCar', validation(updateCar), carController.updateCar)
router.post('/removeCar', validation(removeCar), carController.removeCar)

export default router
