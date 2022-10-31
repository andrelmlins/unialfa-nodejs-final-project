import { Post } from '../entities/Post'
import { IPost } from '../entities/IPost'
import { IPostRepository } from '@modules/post/repositories/IPostRepository'
import { ICreatePostDTO } from '@modules/post/dtos/ICreatePostDTO'
import { IFindPostDTO } from '@modules/post/dtos/IFindPostDTO'
import { IResponseFindPost } from '@modules/post/dtos/IResponse'

export class PostRepository implements IPostRepository {
  async create({ title, content, user_id, created_at }: ICreatePostDTO): Promise<void> {
    const post = new Post({ title, content, user_id, created_at })
    await post.save()
  }

  async find({ user_id, skip, limit }: IFindPostDTO): Promise<IResponseFindPost> {
    let objWhere = {}
    user_id ? objWhere = { ...objWhere, user_id } : objWhere

    const posts = await Post
      .find(objWhere)
      .skip(skip)
      .limit(limit)
      .sort({ created_at: 'desc' })
    const totalCount = await Post.countDocuments()

    return { posts, totalCount }
  }

  async findById(id: string): Promise<IPost | null> {
    return await Post.findById(id)
  }

  async delete(id: string): Promise<void> {
    await Post.deleteOne({ _id: id })
  }
}
