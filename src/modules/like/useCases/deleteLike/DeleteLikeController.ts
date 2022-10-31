import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteLikeUseCase } from './DeleteLikeUseCase'

export class DeleteLikeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteLikeUseCase = container.resolve(DeleteLikeUseCase)

    await deleteLikeUseCase.execute({ id })

    return response.status(204).send()
  }
}
