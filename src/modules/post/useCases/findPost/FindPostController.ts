import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindPostUseCase } from './FindPostUseCase'

export class FindPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { user_id, skip, limit } = request.query

    const findPostUseCase = container.resolve(FindPostUseCase)

    const { posts, totalCount } = await findPostUseCase.execute({
      user_id: request.path === '/me' ? id : user_id?.toString(),
      skip: skip?.toString() ? parseInt(skip.toString()) : 0,
      limit: limit?.toString() ? parseInt(limit.toString()) : 0
    })

    return response.set('x-total-count', totalCount.toString()).json(posts)
  }
}
