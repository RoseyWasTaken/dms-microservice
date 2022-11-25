/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Types } from 'mongoose'
import { ApiError } from '../error/errors'
import { ICar, ICarDoc, IUniqueCar } from '../interfaces/car.Interface'
import { Car } from '../models/models'

class CarService {
  constructor () {
  }

  public createCar = async (car: ICar): Promise<ICar> => {
    return await Car.create(car)
  }

  public getCarById = async (carId: Types.ObjectId): Promise<ICarDoc | null> => {
    return await Car.findById(carId)
  }

  public getCars = async (query: Partial<ICar>): Promise<ICarDoc[] | null> => {
    return await Car.find(query)
  }

  public changeColor = async (query: IUniqueCar, update: string): Promise<ICarDoc | null> => {
    return await Car.findOneAndUpdate(query, { color: update }, { new: true })
  }

  public removeCar = async (query: IUniqueCar): Promise<void> => {
    const deletionResult = await Car.deleteOne(query)
    if (deletionResult.deletedCount === 0) {
      throw new ApiError('Not found', 404)
    } else {
      return
    }
  }
}

export default CarService
