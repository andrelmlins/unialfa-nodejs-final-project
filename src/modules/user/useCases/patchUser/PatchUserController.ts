import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { PatchUserUseCase } from './PatchUserUseCase'

export class PatchUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { password } = request.body

    const updateUserUseCase = container.resolve(PatchUserUseCase)

    await updateUserUseCase.execute({ id, password })

    return response.status(204).send()
  }
}
