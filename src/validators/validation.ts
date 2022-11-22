import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

const chooseKeys = (object: Record<string, any>, keys: string[]): any => {
  keys.reduce((obj: any, key: string) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key]
    }
    return obj
  }, {})
}

export const validate =
  (schema: Record<string, any>) =>
    (req: Request, _res: Response, next: NextFunction): void => {
      const validSchema = chooseKeys(schema, ['params', 'query', 'body'])
      const object = chooseKeys(req, Object.keys(validSchema))
      const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' } })
        .validate(object)

      if (error) {
        return next(new Error('Bad Request'))
      }
      Object.assign(req, value)
      return next()
    }
