import { z } from 'express-zod-api'
import { Types } from 'mongoose'

const hexReg = /^([0-9a-f]{3}){8}$/
const vinReg = /[A-HJ-NPR-Z0-9]{17}/

export const carBody = z.object({
  vin: z.string().regex(vinReg),
  make: z.string(),
  model: z.string(),
  color: z.string(),
  year: z.number()
})

export const searchCar = carBody.partial()

export const carId = z.object({
  _id: z.string().length(24).regex(hexReg)
})

export const colorChange = z.object({
  vin: z.string().regex(vinReg),
  color: z.string()
})

export const carVin = z.object({
  vin: z.string().regex(vinReg)
})

export type CreateCar = z.infer<typeof carBody>
export type SearchCar = z.infer<typeof searchCar>
export type CarId = Types.ObjectId
export type ColorChange = z.infer<typeof colorChange>
export type CarVin = z.infer<typeof carVin>
