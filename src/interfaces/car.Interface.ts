import { Types } from 'mongoose'

interface ICar {
  _id?: Types.ObjectId
  vin: string
  make: string
  model: string
  color: string
  year: number
}

export default ICar
