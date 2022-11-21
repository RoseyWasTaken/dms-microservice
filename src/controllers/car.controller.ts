import { Request, Response } from 'express' // I've ???extended??? the Request class in d.ts
import CarService  from '../services/car.service'

const createCar = async (req: Request, res: Response ) => {
    const car = await CarService.createCar(req.body);
}