import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCommentUseCase } from './CreateCommentUseCase'

export class CreateCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { content, post_id } = request.body

    const createCommentUseCase = container.resolve(CreateCommentUseCase)

    await createCommentUseCase.execute({ content, post_id, user_requisition_id: id })

    return response.status(201).send()
  }
}
