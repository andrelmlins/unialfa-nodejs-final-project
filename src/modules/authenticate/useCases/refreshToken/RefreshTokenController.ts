import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { RefreshTokenUseCase } from './RefreshTokenUseCase'

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { refresh_token } = request.body

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase)

    const refreshToken = await refreshTokenUseCase.execute({ user_requisition_id: id, refresh_token })

    return response.json(refreshToken)
  }
}
