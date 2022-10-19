import { NextFunction, Request, Response } from 'express'

const formatError = async (
  err: { error: { isJoi: unknown }; type: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err && err.error && err.error.isJoi) {
    return res.status(400).json({
      type: err.type,
      message: err.error.toString(),
    })
  }
  next(err)
}

export default formatError
