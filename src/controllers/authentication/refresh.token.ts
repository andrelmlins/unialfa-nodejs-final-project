import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { RequestWithUser } from '../../middleware/authentication'

export const refreshToken = async (req: RequestWithUser, res: Response) => {
  try {
    const decodedRefreshToken = jwt.verify(
      req.body.refreshToken,
      process.env.JWT_SECRET_REFRESH as string
    )

    if (decodedRefreshToken.sub !== req.user?.id) {
      return res
        .status(400)
        .send({ message: 'Token de atualização é inválido' })
    }
  } catch (e) {
    res.status(400).send({ message: 'Token de atualização é inválido' })
  }
}
