import { Request, Response } from 'express'
import cryptoPassword from '../../lib/crypto.password'
import generateToken from '../../lib/generate.token'
import { UserModel } from '../../models/user'

type LoginProps = {
  email: string
  password: string
}

export const login = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, LoginProps>,
  res: Response
) => {
  const user = await UserModel.findOne({
    email: req.body.email,
    password: cryptoPassword(req.body.password),
  })

  if (!user) {
    return res.status(401).send({ message: 'Email ou senha são inválidos' })
  }

  res.json(generateToken(user.id))
}
