import { Types, Document } from 'mongoose'

interface ICar {
  _id?: Types.ObjectId
  vin: string
  make: string
  model: string
  color: string
  year: number
}

interface IRequest<T> extends Express.Request {
  body: T
}

interface ICarDoc extends Document {}

export { ICar, ICarDoc, IRequest }
