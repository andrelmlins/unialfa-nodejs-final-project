import { IPost } from '../infra/mongodb/entities/IPost'
import { IComment } from '@modules/comment/infra/mongodb/entities/IComment'
import { ILike } from '@modules/like/infra/mongodb/entities/ILike'

export interface IResponseFindPost {
  posts: IPost[]
  totalCount: number
}

export interface IResponsePostDTO {
  _id?: string
  title?: string
  content?: string
  user_id?: string
  created_at?: Date
  comments?: IComment[]
  likes?: ILike[]
  count_likes?: number
}

export interface IResponseFindPostDTO {
  posts: IResponsePostDTO[]
  totalCount: number
}