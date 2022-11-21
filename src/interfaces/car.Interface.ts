import { Types } from 'mongoose'

interface ICar {
  _id?: Types.ObjectId
  vin: string
  color: string
  make: string
  model: string
}

export default ICar
