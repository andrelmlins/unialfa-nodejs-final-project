import { inject, injectable } from 'tsyringe'

import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  id: string
}

@injectable()
export class DeletePostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository
  ) { }

  async execute({ id }: IExecute): Promise<void> {
    const post = await this.postRepository.findById(id)
    if (!post) throw new AppError('Post não existe na base de dados', 404)

    await this.postRepository.delete(id)
  }
}
