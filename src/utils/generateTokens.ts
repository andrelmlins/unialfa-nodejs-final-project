import jwt from 'jsonwebtoken'

import auth from '@config/auth'
import { IPayload } from '@modules/authenticate/dtos/IPayload'
import { IResponseTokens } from '@modules/authenticate/dtos/IResponse'

export const generateTokens = (payload: IPayload): IResponseTokens => {
  const {
    secret_token,
    expires_in_token,
    secret_refresh_token,
    expires_in_refresh_token
  } = auth

  const accessToken = jwt.sign({}, secret_token, {
    subject: payload.sub, // userId
    expiresIn: expires_in_token
  })

  const refreshToken = jwt.sign({ email: payload.email }, secret_refresh_token, {
    subject: payload.sub, // userId
    expiresIn: expires_in_refresh_token
  })

  return { access_token: accessToken, refresh_token: refreshToken }
}
