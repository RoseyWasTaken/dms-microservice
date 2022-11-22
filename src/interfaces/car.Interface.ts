import { Types } from 'mongoose'

interface ICar {
  _id?: Types.ObjectId
  vin: string
}

export default ICar
