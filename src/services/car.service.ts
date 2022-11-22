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

  public getCars = async (query: Record<string, any>): Promise<Array<ICar & Document>> => {
    return await Car.find(query)
  }

  public updateCar = async (query: Record<string, any>, update: string): Promise<ICar & Document | null> => {
    return await Car.findOneAndUpdate(query, { color: update }, { new: true })
  }

  public removeCar = async (query: Record<string, any>): Promise<Record <string, any> | null> => {
    return await Car.deleteOne(query)
  }
}

export default CarService
