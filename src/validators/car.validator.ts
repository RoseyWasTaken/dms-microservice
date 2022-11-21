import Joi from 'joi'
import ICar from 'src/interfaces/car.Interface'

const createCarBody: Record<keyof ICar, any> = { // I have trouble understanding what Record<keyof T, A> does
  _id: Joi.string(),
  vin: Joi.string().required,
  color: Joi.string().required,
  make: Joi.string().required,
  model: Joi.string().required
}

export const createUser = {
  body: Joi.object().keys(createCarBody)
}
