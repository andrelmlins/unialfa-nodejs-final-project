import { Schema, model } from 'mongoose'
import { ILike } from './ILike'

const likeSchema = new Schema<ILike>({
  post_id: { type: String, required: true },
  user_id: { type: String, required: true },
  created_at: { type: Date, required: true }
})

export const Like = model('likes', likeSchema)
