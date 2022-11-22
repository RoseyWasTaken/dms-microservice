import Joi from 'joi'
import ICar from '../interfaces/car.Interface.js'

export const createCarBody: Record<keyof ICar, any> = {
  _id: Joi.string(),
  vin: Joi.string().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  year: Joi.number().required()
}
