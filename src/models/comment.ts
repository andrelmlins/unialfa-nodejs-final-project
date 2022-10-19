import mongoose from 'mongoose'

export type Comment = {
  id: mongoose.Types.ObjectId
  postId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  comment: string
  createAt: string
}

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'posts',
  },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  createAt: { type: String, required: true },
})

export const CommentModel = mongoose.model('comments', commentSchema)
