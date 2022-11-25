import { Request, Response } from 'express'
import httpStatus from 'http-status'
import CarService from '../services/car.service'

const carService = new CarService()

export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await carService.createCar(req.body)
    res.status(httpStatus.CREATED).send(car)
  } catch (err) {
    console.log(typeof err)
    throw new Error('Car already exists')
  }
}

export const getCarById = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.getCarById(req.body._id)
  res.send(car)
}

export const getCars = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.getCars(req.body)
  res.send(car)
}

export const updateCar = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.updateCar(req.body.query, req.body.color)
  res.send(car)
}

export const removeCar = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.removeCar(req.body)
  res.send(car)
}
