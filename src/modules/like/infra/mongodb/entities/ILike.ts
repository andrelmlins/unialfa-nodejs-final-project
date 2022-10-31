import { Document } from 'mongoose'

export interface ILike extends Document {
  post_id: string
  user_id: string
  created_at: Date
}
