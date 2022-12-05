import { NextFunction, Request, Response } from 'express'
import { z } from 'express-zod-api'
import { errorHandler } from '../error/errorHandler'
import { ApiError } from '../error/errors'

export const validator =
  (validationSchema: z.SomeZodObject) =>
    async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
      try {
        validationSchema.parse(req.body)
      } catch (error: any) {
        return errorHandler(new ApiError(error, 400), _res)
      }
      return next()
    }
