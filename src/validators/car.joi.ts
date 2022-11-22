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

export const updateCar: Record<string, any> = {
  query: {
    vin: Joi.string(),
    make: Joi.string()
  },
  update: {
    color: Joi.string()
  }
}

export const removeCar: Record<string, any> = {
  _id: Joi.string(),
  vin: Joi.string()
}
