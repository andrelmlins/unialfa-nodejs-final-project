import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindUserUseCase } from './FindUserUseCase'

export class FindUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { skip, limit } = request.query

    const findUserUseCase = container.resolve(FindUserUseCase)

    const { users, totalCount } = await findUserUseCase.execute({
      skip: skip?.toString() ? parseInt(skip.toString()) : 0,
      limit: limit?.toString() ? parseInt(limit.toString()) : 0
    })

    return response.set('x-total-count', totalCount.toString()).json(users)
  }
}
