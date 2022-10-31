import { Schema, model } from 'mongoose'
import { IComment } from './IComment'

const commentSchema = new Schema<IComment>({
  content: { type: String, required: true },
  post_id: { type: String, required: true },
  user_id: { type: String, required: true },
  created_at: { type: Date, required: true }
})

export const Comment = model('comments', commentSchema)
