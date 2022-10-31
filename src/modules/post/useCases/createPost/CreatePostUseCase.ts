import { inject, injectable } from 'tsyringe'

import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { IUserRepository } from '@modules/user/repositories/IUserRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  title: string
  content: string
  user_id: string
}

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  async execute({ title, content, user_id }: IExecute): Promise<void> {
    const user = await this.userRepository.findById(user_id)
    if (!user) throw new AppError('Usuário não existe na base de dados', 404)

    await this.postRepository.create({ title, content, user_id, created_at: new Date() })
  }
}
