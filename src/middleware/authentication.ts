import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User, UserModel } from '../models/user'

export type RequestWithUser = Request & {
  user?: User
}

const authentication = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      throw new Error('token.not.found')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

    const user = await UserModel.findById(decoded.sub)

    if (!user) {
      throw new Error('user.not.found')
    }

    req.user = {
      name: user.name,
      email: user.email,
      id: user.id,
    }

    next()
  } catch (error) {
    const response = {
      status: 404,
      message: 'unexpected.error',
    }

    if (error?.message) {
      response.status = 422
      response.message = error?.message
    }

    return res.status(response.status).send({ message: response.message })
  }
}

export default authentication
