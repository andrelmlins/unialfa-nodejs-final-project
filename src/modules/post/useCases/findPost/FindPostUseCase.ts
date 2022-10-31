import { inject, injectable } from 'tsyringe'

import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { ICommentRepository } from '@modules/comment/repositories/ICommentRepository'
import { ILikeRepository } from '@modules/like/repositories/ILikeRepository'
import { IResponsePostDTO, IResponseFindPostDTO } from '@modules/post/dtos/IResponse'
import { IPost } from '@modules/post/infra/mongodb/entities/IPost'

interface IExecute {
  user_id?: string
  skip: number
  limit: number
}

@injectable()
export class FindPostUseCase {
  constructor(
    @inject('PostRepository')
    private postRepository: IPostRepository,
    @inject('CommentRepository')
    private commentRepository: ICommentRepository,
    @inject('LikeRepository')
    private likeRepository: ILikeRepository
  ) { }

  async execute({ user_id, skip, limit }: IExecute): Promise<IResponseFindPostDTO> {
    const { posts, totalCount } = await this.postRepository.find({ user_id, skip, limit })
    if (posts.length) {
      const promises = posts.map(async (item: IPost) => {
        const { comments } = await this.commentRepository.find({ post_id: item._id, skip: 0, limit: 1000 })
        const { likes } = await this.likeRepository.find({ post_id: item._id, skip: 0, limit: 1000 })

        return { ...item?.toObject(), comments, likes, count_likes: likes.length }
      })

      const postsFormatted = await Promise.all(promises)
      return { posts: postsFormatted as IResponsePostDTO[], totalCount }
    }

    return { posts: [], totalCount: 0 }
  }
}
