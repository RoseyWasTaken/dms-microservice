import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '../error/errors'
import { errorHandler } from '../error/errorHandler'
import CarService from '../services/car.service'
import { ICar, IRequest } from '../interfaces/car.Interface'

const carService = new CarService()

export const createCar = async (req: IRequest<ICar>, res: Response): Promise<void> => {
  try {
    const car = await carService.createCar(req.body)
    res.status(httpStatus.CREATED).send(car)
  } catch (err) {
    errorHandler(new ApiError(`Car with ${req.body.vin} already exists.`, 200), res)
  }
}

export const getCarById = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.getCarById(req.body._id)
  if (!car) {
    errorHandler(new ApiError('Not found', 404), res)
    return
  } else {
    res.status(httpStatus.OK).send(car)
  }
}

export const getCars = async (req: Request, res: Response): Promise<void> => {
  const car = await carService.getCars(req.body)
  res.status(httpStatus.OK).send(car)
}

export const changeColor = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await carService.changeColor(req.body.query, req.body.color)
    res.status(httpStatus.OK).send(car)
  } catch (err) {
    errorHandler(new ApiError('Unknown exception', 500), res)
  }
}

export const removeCar = async (req: Request, res: Response): Promise<void> => {
  try {
    await carService.removeCar(req.body) // if it does not throw an error OG
    res.status(httpStatus.OK)
  } catch (err) {
    errorHandler(new ApiError('Not found', 404), res)
  }
}
