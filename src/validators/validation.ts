import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { ApiError } from '../error/errors'
import { errorHandler } from '../error/errorHandler'

export const validation =
  (schema: Joi.ObjectSchema) => // from /car.route.ts - router.post('/createCar', validation(schema))
    (req: Request, _res: Response, next: NextFunction): void => {
      const { error, value } = schema.min(1).validate(req.body)
      if (error) {
        const errorMessage = error.details.map(item => {
          return item.path
        }).toString()
        return errorHandler(new ApiError(`Invalid ${errorMessage}`, 200), _res)
      }
      req.body = value
      return next()
    }
