import { Request, Response } from 'express' // I've ???extended??? the Request class in d.ts
import httpStatus from 'http-status'
import CarService from '../services/car.service'

const carService = new CarService()

export const createCar = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.createCar(req.body)
  res.status(httpStatus.CREATED).send(car)
}

export const getCarById = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.getCarById(req.body._id)
  res.send(car)
}

export const updateCarColor = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.updateCarColor(req.body.color, req.body.carId)
  res.status(httpStatus.OK).send(car)
}
