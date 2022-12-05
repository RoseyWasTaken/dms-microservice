import { Request } from 'express'
import { z } from 'express-zod-api'
import { Types, Document } from 'mongoose'
import { carBody, carVin, colorChange, searchCar } from '../validators/car.validation'

// Zod is the best, I swear. Instead of defining separate interfaces from my input data schemas
// Zod infers the type from schemas. Therefore I don't have to type them manually. So POST request input === function return

export type CreateCar = z.infer<typeof carBody> // type instead of interface for the convinience - no keysof and such
export type SearchCar = z.infer<typeof searchCar>
export type CarId = Types.ObjectId
export type ColorChange = z.infer<typeof colorChange>
export type CarVin = z.infer<typeof carVin>

export interface IRequest<T> extends Request {
  body: T
}

export interface ICarDoc extends CreateCar, Document {}
