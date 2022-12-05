import { Response } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '../error/errors'
import { errorHandler } from '../error/errorHandler'
import CarService from '../services/car.service'
import { IRequest, CreateCar, CarId, SearchCar } from '../interfaces/car.Interface'

const carService = new CarService()
// I need to figure out how to type out the response
// Request.Express contains a body parameter, Response.Express does not (only send: body:)
// I have to overwrite the type of whatever is being sent out with res.send accordingly to
// the request body contents and the function/method used.
export const createCar = async (req: IRequest<CreateCar>, res: Response): Promise<void> => {
  try {
    const car = await carService.createCar(req.body)
    res.status(httpStatus.CREATED).send(car)
  } catch (err) {
    errorHandler(new ApiError(`Car with ${req.body.vin} already exists.`, 409), res)
  }
}

export const getCarById = async (req: IRequest<CarId>, res: Response): Promise<void> => {
  const car = await carService.getCarById(req.body._id)
  if (!car) {
    errorHandler(new ApiError('Not found', 404), res)
    return
  } else {
    res.status(httpStatus.OK).send(car)
  }
}

export const getCars = async (req: IRequest<SearchCar>, res: Response): Promise<void> => {
  const car = await carService.getCars(req.body)
  res.status(httpStatus.OK).send(car)
}

export const changeColor = async (req: IRequest<Pick<CreateCar, 'vin' | 'color'>>, res: Response): Promise<void> => {
  try {
    const car = await carService.changeColor(req.body.vin, req.body.color)
    res.status(httpStatus.OK).send(car)
  } catch (err) {
    errorHandler(new ApiError('Unknown exception', 500), res)
  }
}

export const removeCar = async (req: IRequest<Pick<CreateCar, 'vin'>>, res: Response): Promise<void> => {
  try {
    await carService.removeCar(req.body.vin) // if it does not throw an error OK
    res.status(httpStatus.OK).send()
  } catch (err) {
    errorHandler(err, res)
  }
}
