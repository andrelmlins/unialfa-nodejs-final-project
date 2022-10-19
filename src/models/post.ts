import mongoose from 'mongoose'

export type Post = {
  id: mongoose.Types.ObjectId
  title: string
  text: string
  userId: mongoose.Types.ObjectId
  createAt: string
}

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  createAt: { type: String, required: true },
})

export const PostModel = mongoose.model('posts', postSchema)
