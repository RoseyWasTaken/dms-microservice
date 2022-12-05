/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Types } from 'mongoose'
import { ApiError } from '../error/errors'
import { ICar, ICarDoc } from '../interfaces/car.Interface'
import { Car } from '../models/models'

class CarService {
  constructor () {
  }

  public createCar = async (car: ICar): Promise<ICarDoc> => {
    return await Car.create(car)
  }

  public getCarById = async (carId: Types.ObjectId): Promise<ICarDoc | null> => {
    return await Car.findById(carId)
  }

  public getCars = async (query: Partial<ICar>): Promise<ICarDoc[] | null> => {
    return await Car.find(query)
  }

  public changeColor = async (vin: ICar['vin'], color: ICar['color']): Promise<ICarDoc | null> => {
    return await Car.findOneAndUpdate({ vin }, { color }, { new: true })
  }

  public removeCar = async (vin: ICar['vin']): Promise<void> => {
    const deletionResult = await Car.deleteOne({ vin })
    if (deletionResult.deletedCount === 0) {
      throw new ApiError('Not found', 404)
    } else {
      return
    }
  }
}

export default CarService
