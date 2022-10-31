import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindCommentUseCase } from './FindCommentUseCase'

export class FindCommentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { post_id, user_id, skip, limit } = request.query

    const findCommentUseCase = container.resolve(FindCommentUseCase)

    const { comments, totalCount } = await findCommentUseCase.execute({
      post_id: post_id?.toString(),
      user_id: user_id?.toString(),
      skip: skip?.toString() ? parseInt(skip.toString()) : 0,
      limit: limit?.toString() ? parseInt(limit.toString()) : 0
    })

    return response.set('x-total-count', totalCount.toString()).json(comments)
  }
}
