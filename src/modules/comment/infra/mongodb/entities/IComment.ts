import { Document } from 'mongoose'

export interface IComment extends Document {
  content: string
  post_id: string
  user_id: string
  created_at: Date
}
