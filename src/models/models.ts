import mongoose from 'mongoose'
import carSchema from './schemas/car.schema'
import ICar from '../interfaces/car.Interface'

const Car = mongoose.model<ICar>('Car', carSchema)

export { Car }
