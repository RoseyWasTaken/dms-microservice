import { ICar, ICarDoc } from "./car.Interface"

interface ICarService {
  createCar: Promise<ICarDoc> = (car: ICar)
  
}

export { ICarService }