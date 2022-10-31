import { inject, injectable } from 'tsyringe'

import { ILikeRepository } from '@modules/like/repositories/ILikeRepository'
import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  post_id: string
  user_requisition_id: string
}

@injectable()
export class CreateLikeUseCase {
  constructor(
    @inject('LikeRepository')
    private likeRepository: ILikeRepository,
    @inject('PostRepository')
    private postRepository: IPostRepository
  ) { }

  async execute({ post_id, user_requisition_id }: IExecute): Promise<void> {
    const post = await this.postRepository.findById(post_id)
    if (!post) throw new AppError('Post não existe na base de dados')

    await this.likeRepository.create({ post_id, user_id: user_requisition_id, created_at: new Date() })
  }
}
