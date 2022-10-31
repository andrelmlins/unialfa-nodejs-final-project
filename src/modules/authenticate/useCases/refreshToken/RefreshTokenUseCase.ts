import { injectable } from 'tsyringe'
import jwt from 'jsonwebtoken'
import auth from '@config/auth'
import { generateTokens } from '@utils/generateTokens'

import { IResponseTokens } from '@modules/authenticate/dtos/IResponse'
import { IPayload } from '@modules/authenticate/dtos/IPayload'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  user_requisition_id: string
  refresh_token: string
}

@injectable()
export class RefreshTokenUseCase {
  constructor() { }

  async execute({ user_requisition_id, refresh_token }: IExecute): Promise<IResponseTokens> {
    try {
      const { secret_refresh_token } = auth

      const { sub, email } = jwt.verify(refresh_token, secret_refresh_token) as IPayload
      if (sub != user_requisition_id) throw new AppError('Refresh token inválido')

      return generateTokens({ sub, email })
    } catch (e) {
      throw new AppError('Refresh token inválido')
    }
  }
}
