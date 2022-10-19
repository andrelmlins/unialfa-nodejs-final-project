import mongoose from 'mongoose'

export type Like = {
  id: mongoose.Types.ObjectId
  postId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  createAt: string
}

const likeSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  createAt: { type: String, required: true },
})

export const LikeModel = mongoose.model('likes', likeSchema)
