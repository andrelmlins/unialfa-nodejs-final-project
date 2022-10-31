import { Like } from '../entities/Like'
import { ILike } from '../entities/ILike'
import { ILikeRepository } from '@modules/like/repositories/ILikeRepository'
import { ICreateLikeDTO } from '@modules/like/dtos/ICreateLikeDTO'
import { IFindLikeDTO } from '@modules/like/dtos/IFindLikeDTO'
import { IResponseFindLike } from '@modules/like/dtos/IResponse'

export class LikeRepository implements ILikeRepository {
  async create({ post_id, user_id, created_at }: ICreateLikeDTO): Promise<void> {
    const like = new Like({ post_id, user_id, created_at })
    await like.save()
  }

  async find({ post_id, user_id, skip, limit }: IFindLikeDTO): Promise<IResponseFindLike> {
    let objQuery = {}
    post_id ? objQuery = { ...objQuery, post_id } : objQuery
    user_id ? objQuery = { ...objQuery, user_id } : objQuery

    const likes = await Like.find(objQuery).skip(skip).limit(limit)
    const totalCount = await Like.countDocuments()

    return { likes, totalCount }
  }

  async findById(id: string): Promise<ILike | null> {
    return await Like.findById(id)
  }

  async delete(id: string): Promise<void> {
    await Like.deleteOne({ _id: id })
  }
}
