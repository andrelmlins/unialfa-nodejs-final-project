import { Document } from 'mongoose'

export interface IPost extends Document {
  title: string
  content: string
  user_id: string
  created_at: Date
}
