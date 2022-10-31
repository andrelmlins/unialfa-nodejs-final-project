import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateLikeUseCase } from './CreateLikeUseCase'

export class CreateLikeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { post_id } = request.body

    const createLikeUseCase = container.resolve(CreateLikeUseCase)

    await createLikeUseCase.execute({ post_id, user_requisition_id: id })

    return response.status(201).send()
  }
}
