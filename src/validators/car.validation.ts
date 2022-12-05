import { z } from 'express-zod-api'

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

export const carId = z.object({ // while this is not needed for typing, it is required for post request validation
  _id: z.string().length(24).regex(hexReg) // === _id is a 24 char hex string
})

export const colorChange = z.object({
  vin: z.string().regex(vinReg),
  color: z.string()
})

export const carVin = z.object({
  vin: z.string().regex(vinReg)
})
