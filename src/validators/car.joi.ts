import Joi from 'joi'
import ICar from '../interfaces/car.Interface'

export const createCarBody: Record<keyof ICar, any> = {
  _id: Joi.string(),
  vin: Joi.string().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  year: Joi.number().required()
}

export const getCarById: Record<string, any> = {
  _id: Joi.string()
}

export const getCars: Record<string, any> = {
  vin: Joi.string(),
  make: Joi.string(),
  model: Joi.string(),
  color: Joi.string(),
  year: Joi.number()
}

const carUniqueSchema: Record<string, any> = {
  vin: Joi.string(),
  _id: Joi.string()
}

export const UpdateCarsObject = Joi.object({
  query: Joi.object(carUniqueSchema),
  color: Joi.string().required()
})

export const removeCar: Record<string, any> = {
  _id: Joi.string(),
  vin: Joi.string()
}

export const CreateCarBodyObject = Joi.object(createCarBody)
export const GetCarByIdObject = Joi.object(getCarById)
export const GetCarsObject = Joi.object(getCars)
export const RemoveCarObject = Joi.object(removeCar)
