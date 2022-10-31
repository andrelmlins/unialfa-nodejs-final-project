import { inject, injectable } from 'tsyringe'

import { ILikeRepository } from '@modules/like/repositories/ILikeRepository'
import { IResponseFindLike } from '@modules/like/dtos/IResponse'

interface IExecute {
  post_id?: string
  user_id?: string
  skip: number
  limit: number
}

@injectable()
export class FindLikeUseCase {
  constructor(
    @inject('LikeRepository')
    private likeRepository: ILikeRepository
  ) { }

  async execute({ post_id, user_id, skip, limit }: IExecute): Promise<IResponseFindLike> {
    return await this.likeRepository.find({ post_id, user_id, skip, limit })
  }
}
