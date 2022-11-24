import Joi from 'joi'
import { Types, Document } from 'mongoose'

interface ICar {
  _id?: Types.ObjectId
  vin: Joi.StringSchema
  make: Joi.StringSchema
  model: Joi.StringSchema
  color: Joi.StringSchema
  year: Joi.NumberSchema
}

interface ICarDoc extends Document {}

interface IuniqueCar {
  vin: Joi.StringSchema
  _id: Types.ObjectId
}

interface IchangeColor extends IuniqueCar {
  color: Joi.StringSchema
}

export { ICar, IuniqueCar, IchangeColor, ICarDoc }
