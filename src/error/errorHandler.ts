import { Response } from 'express'

export const errorHandler = (err: any, res: Response): void => {
  const statusCode = err.statusCode ? err.statusCode : 500
  res.status(statusCode)
  res.send(err.message)
}
