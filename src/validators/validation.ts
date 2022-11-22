import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

export const validation =
  (schema: Record<string, any>) => // from /car.route.ts - router.post('/createCar', validation(schema))
    (req: Request, _res: Response, next: NextFunction): void => {
      const { error, value } = Joi.object(schema)
        .validate(req.body)
      if (error) {
        return next(new Error('Bad request.'))
      }
      req.body = value
      return next()
    }

// trying to make the validation middleware work for me
// previous implementation actually formatted the input
// for the time being i would like it to just make sure
// the input is correct.
