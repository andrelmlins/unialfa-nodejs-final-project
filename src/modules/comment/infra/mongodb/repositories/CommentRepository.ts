import { Comment } from '../entities/Comment'
import { IComment } from '../entities/IComment'
import { ICommentRepository } from '@modules/comment/repositories/ICommentRepository'
import { ICreateCommentDTO } from '@modules/comment/dtos/ICreateCommentDTO'
import { IFindCommentDTO } from '@modules/comment/dtos/IFindCommentDTO'
import { IResponseFindComment } from '@modules/comment/dtos/IResponse'

export class CommentRepository implements ICommentRepository {
  async create({ content, post_id, user_id, created_at }: ICreateCommentDTO): Promise<void> {
    const comment = new Comment({ content, post_id, user_id, created_at })
    await comment.save()
  }

  async find({ post_id, user_id, skip, limit }: IFindCommentDTO): Promise<IResponseFindComment> {
    let objQuery = {}
    post_id ? objQuery = { ...objQuery, post_id } : objQuery
    user_id ? objQuery = { ...objQuery, user_id } : objQuery

    const comments = await Comment.find(objQuery).skip(skip).limit(limit)
    const totalCount = await Comment.countDocuments()

    return { comments, totalCount }
  }

  async findById(id: string): Promise<IComment | null> {
    return await Comment.findById(id)
  }

  async delete(id: string): Promise<void> {
    await Comment.deleteOne({ _id: id })
  }
}
