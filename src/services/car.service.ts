/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ApiError } from '../error/errors'
import { ICarDoc, CreateCar, SearchCar, CarId } from '../interfaces/car.Interface'
import { Car } from '../models/models'

class CarService {
  constructor () {
  }

  public createCar = async (car: CreateCar): Promise<ICarDoc> => {
    return await Car.create(car)
  }

  public getCarById = async (carId: CarId): Promise<ICarDoc | null> => {
    return await Car.findById(carId)
  }

  public getCars = async (query: SearchCar): Promise<ICarDoc[] | null> => {
    return await Car.find(query)
  }

  public changeColor = async (vin: CreateCar['vin'], color: CreateCar['color']): Promise<ICarDoc | null> => {
    return await Car.findOneAndUpdate({ vin }, { color }, { new: true })
  }

  public removeCar = async (vin: CreateCar['vin']): Promise<void> => {
    const deletionResult = await Car.deleteOne({ vin })
    if (deletionResult.deletedCount === 0) {
      throw new ApiError('Not found', 404)
    } else {
      return
    }
  }
}

export default CarService
