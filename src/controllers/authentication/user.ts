import { Response } from 'express'
import { RequestWithUser } from '../../middleware/authentication'

export const user = async (req: RequestWithUser, res: Response) => {
  res.send({ me: req.user })
}
