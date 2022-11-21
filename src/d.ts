import ICar from './interfaces/car.Interface'

declare module 'express-serve-static-core' { // I stol... borrowed this. What I think it does is that it extends the request with my ICar interface
  interface Request {
    car: ICar
  }
}

export default Request
