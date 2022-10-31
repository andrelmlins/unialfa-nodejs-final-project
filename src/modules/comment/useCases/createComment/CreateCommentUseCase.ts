import { inject, injectable } from 'tsyringe'

import { ICommentRepository } from '@modules/comment/repositories/ICommentRepository'
import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { AppError } from '@shared/errors/AppError'

interface IExecute {
  content: string
  post_id: string
  user_requisition_id: string
}

@injectable()
export class CreateCommentUseCase {
  constructor(
    @inject('CommentRepository')
    private commentRepository: ICommentRepository,
    @inject('PostRepository')
    private postRepository: IPostRepository
  ) { }

  async execute({ content, post_id, user_requisition_id }: IExecute): Promise<void> {
    const post = await this.postRepository.findById(post_id)
    if (!post) throw new AppError('Post não existe na base de dados')

    await this.commentRepository.create({ content, post_id, user_id: user_requisition_id, created_at: new Date() })
  }
}
