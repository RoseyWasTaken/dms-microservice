import mongoose, { Types } from 'mongoose'
import carSchema from './schemas/car.schema'

interface CarMod {
  _id?: Types.ObjectId
  vin: string
  make: string
  model: string
  color: string
  year: number
}

const Car = mongoose.model<CarMod>('Car', carSchema)

export { Car }
