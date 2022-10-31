import { inject, injectable } from 'tsyringe'

import { ICommentRepository } from '@modules/comment/repositories/ICommentRepository'
import { IResponseFindComment } from '@modules/comment/dtos/IResponse'

interface IExecute {
  post_id?: string
  user_id?: string
  skip: number
  limit: number
}

@injectable()
export class FindCommentUseCase {
  constructor(
    @inject('CommentRepository')
    private commentRepository: ICommentRepository
  ) { }

  async execute({ post_id, user_id, skip, limit }: IExecute): Promise<IResponseFindComment> {
    return await this.commentRepository.find({ post_id, user_id, skip, limit })
  }
}
