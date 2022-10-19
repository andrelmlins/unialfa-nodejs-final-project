import { Request, Response } from 'express'
import cryptoPassword from '../../lib/crypto.password'
import { UserModel } from '../../models/user'

export const register = async (req: Request, res: Response) => {
  const userWithEmail = await UserModel.findOne({ email: req.body.email })

  if (userWithEmail) {
    return res
      .status(400)
      .send({ message: 'Este email já está sendo utilizado!' })
  }

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: cryptoPassword(req.body.password),
  })

  await user.save()

  res.json({ user: { ...user.toObject(), password: undefined } })
}
