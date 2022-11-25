import Joi from 'joi'
import { ICar, IUniqueCar, IChangeColor } from '../interfaces/car.Interface'

const createCarBody: ICar = {
  vin: Joi.string(),
  make: Joi.string(),
  model: Joi.string(),
  color: Joi.string(),
  year: Joi.number()
}

const getCarById: Record<string, Joi.StringSchema> = {
  _id: Joi.string().hex().length(24).required()
}

const carUniqueSchema: Record<keyof IUniqueCar, any> = {
  _id: Joi.string().hex().length(24),
  vin: Joi.string()
}

const changeColor: Record<keyof IChangeColor, any> = {
  _id: Joi.string().hex().length(24),
  vin: Joi.string(),
  color: Joi.string().required()
}

export const CreateCarBodyObject = Joi.object(createCarBody).fork(Object.keys(createCarBody), (schema) => schema.required())
export const GetCarByIdObject = Joi.object(getCarById)
export const GetCarsObject = Joi.object(createCarBody)
export const RemoveCarObject = Joi.object(carUniqueSchema).min(1)
export const ChangeColorObject = Joi.object(changeColor).min(2)
