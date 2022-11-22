/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Document, Types } from 'mongoose'
import ICar from '../interfaces/car.Interface.js'
import { Car } from '../models/models.js'

class CarService {
  constructor () {
  }

  public createCar = async (car: ICar): Promise<ICar> => {
    return await Car.create(car)
  }

  public getCarById = async (carId: Types.ObjectId): Promise<ICar & Document | null> => {
    return await Car.findById(carId)
  }
}

export default CarService
