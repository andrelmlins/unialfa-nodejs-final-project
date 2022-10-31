import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreatePostUseCase } from './CreatePostUseCase'

export class CreatePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content, user_id } = request.body

    const createPostUseCase = container.resolve(CreatePostUseCase)

    await createPostUseCase.execute({ title, content, user_id })

    return response.status(201).send()
  }
}
