import Joi from 'joi'
import ICar from '../interfaces/car.Interface.js'

const createCarBody: Record<keyof ICar, any> = { // I have trouble understanding what Record<keyof T, A> does
  _id: Joi.string(),
  vin: Joi.string().required
}

export const createCar = {
  body: Joi.object().keys(createCarBody)
}
