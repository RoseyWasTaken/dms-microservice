import mongoose from 'mongoose'
import carSchema from './schemas/car.schema.js'
import ICar from '../interfaces/car.Interface.js'

const Car = mongoose.model<ICar>('Car', carSchema)

export { Car }
