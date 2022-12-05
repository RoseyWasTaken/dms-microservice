import { Response } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '../error/errors'
import { errorHandler } from '../error/errorHandler'
import CarService from '../services/car.service'
import { ICar, IRequest } from '../interfaces/car.Interface'

const carService = new CarService()
// I need to figure out what type of response should I add to the interface
export const createCar = async (req: IRequest<ICar>, res: Response): Promise<void> => {
  try {
    const car = await carService.createCar(req.body)
    res.status(httpStatus.CREATED).send(car)
  } catch (err) {
    errorHandler(new ApiError(`Car with ${req.body.vin} already exists.`, 409), res)
  }
}

export const getCarById = async (req: IRequest<Required<ICar>>, res: Response): Promise<void> => {
  const car = await carService.getCarById(req.body._id)
  if (!car) {
    errorHandler(new ApiError('Not found', 404), res)
    return
  } else {
    res.status(httpStatus.OK).send(car)
  }
}

export const getCars = async (req: IRequest<Partial<ICar>>, res: Response): Promise<void> => {
  const car = await carService.getCars(req.body)
  res.status(httpStatus.OK).send(car)
}

export const changeColor = async (req: IRequest<Pick<ICar, 'vin' | 'color'>>, res: Response): Promise<void> => {
  try {
    const car = await carService.changeColor(req.body.vin, req.body.color)
    res.status(httpStatus.OK).send(car)
  } catch (err) {
    errorHandler(new ApiError('Unknown exception', 500), res)
  }
}

export const removeCar = async (req: IRequest<Pick<ICar, 'vin'>>, res: Response): Promise<void> => {
  try {
    await carService.removeCar(req.body.vin) // if it does not throw an error OG
    res.status(httpStatus.OK).send()
  } catch (err) {
    errorHandler(err, res)
  }
}
