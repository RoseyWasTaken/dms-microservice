export const errorHandler = (err: any, req: any, res: any, next: any): any => {
  res.status(500).send(err)
}
