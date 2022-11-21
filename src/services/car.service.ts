/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Document, Types } from 'mongoose'
import ICar from '../interfaces/car.Interface'
import { Car } from '../models/models'

class CarService {
  constructor () {
  }

  public createCar = async (car: ICar): Promise<ICar> => {
    return await Car.create(car)
  }

  public getCarById = async (carId: Types.ObjectId): Promise<ICar & Document | null> => {
    return await Car.findById(carId)
  }

  public updateCarColor = async (color: string, carId: Types.ObjectId): Promise<ICar | null> => {
    const car = await this.getCarById(carId)
    if (!car) {
      throw new Error(`Car of ${carId.toString()} id does not exist.`)
    }
    car.color = color
    await car.save()
    return car
  }
}

export default CarService
