import Joi from 'joi'
import j2s from 'joi-to-swagger'

const vinReg = /[A-HJ-NPR-Z0-9]{17}/

const createCarBody = {
  vin: Joi.string().pattern(vinReg),
  make: Joi.string(),
  model: Joi.string(),
  color: Joi.string(),
  year: Joi.number()
}

const getCarById = { // joi sucks
  _id: Joi.string().hex().length(24).required()
}

const carUniqueSchema = {
  vin: Joi.string().pattern(vinReg)
}

const changeColor = {
  vin: Joi.string().pattern(vinReg).required(),
  color: Joi.string().required()
}

export const CreateCarBodyObject = Joi.object(createCarBody).fork(Object.keys(createCarBody), (schema) => schema.required())
export const GetCarByIdObject = Joi.object(getCarById)
export const GetCarsObject = Joi.object(createCarBody)
export const RemoveCarObject = Joi.object(carUniqueSchema)
export const ChangeColorObject = Joi.object(changeColor)

export const swaggerCreateCarBodyObject = j2s(CreateCarBodyObject).swagger
export const swaggerGetCarByIdObject = j2s(GetCarByIdObject).swagger
export const swaggerGetCarsObject = j2s(GetCarsObject).swagger
export const swaggerRemoveCarObject = j2s(RemoveCarObject).swagger
export const swaggerChangeColorObject = j2s(ChangeColorObject).swagger
