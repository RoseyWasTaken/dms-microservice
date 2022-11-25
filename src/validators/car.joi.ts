import Joi from 'joi'

const vinReg = /[A-HJ-NPR-Z0-9]{17}/

const createCarBody = {
  vin: Joi.string().pattern(vinReg),
  make: Joi.string(),
  model: Joi.string(),
  color: Joi.string(),
  year: Joi.number()
}

const getCarById = {
  _id: Joi.string().hex().length(24).required()
}

const carUniqueSchema = {
  _id: Joi.string().hex().length(24),
  vin: Joi.string().pattern(vinReg)
}

const changeColor = {
  query: Joi.object(carUniqueSchema).required(),
  color: Joi.string().required()
}

export const CreateCarBodyObject = Joi.object(createCarBody).fork(Object.keys(createCarBody), (schema) => schema.required())
export const GetCarByIdObject = Joi.object(getCarById)
export const GetCarsObject = Joi.object(createCarBody)
export const RemoveCarObject = Joi.object(carUniqueSchema).min(1)
export const ChangeColorObject = Joi.object(changeColor)
