import { Request, Response } from 'express'
import cryptoPassword from '../../lib/crypto.password'
import { User, UserModel } from '../../models/user'

type UpdatePasswordProps = {
  password: string
  newPassword: string
  user: User
}

type RequestWithUser = {
  user?: User
} & Request<
  Record<string, unknown>,
  Record<string, unknown>,
  UpdatePasswordProps
>

export const updatePassword = async (req: RequestWithUser, res: Response) => {
  if (!req.user?.email) {
    return res.status(400).send({ message: 'erro' })
  }

  const user = await UserModel.findOne({
    email: cryptoPassword(req.user.email),
    password: cryptoPassword(req.body.password),
  })

  if (!user) {
    return res.status(400).send({ message: 'erro' })
  }

  user.password = cryptoPassword(req.body.newPassword)

  await user.save()

  res.json({ user: { ...user.toObject(), password: undefined } })
}
