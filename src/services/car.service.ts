/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Types } from 'mongoose'
import { ICar, ICarDoc } from '../interfaces/car.Interface'
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

  public getCars = async (query: Record<string, any>): Promise<ICarDoc[]> => {
    return await Car.find(query)
  }

  public updateCar = async (query: Record<string, any>, update: string): Promise<ICarDoc | null> => {
    return await Car.findOneAndUpdate(query, { color: update }, { new: true })
  }

  public removeCar = async (query: Record<string, any>): Promise<Record <string, any> | null> => {
    return await Car.deleteOne(query)
  }
}

export default CarService
