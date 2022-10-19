import mongoose from 'mongoose'

export type User = {
  id: mongoose.Types.ObjectId
  name: string
  email: string
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

export const UserModel = mongoose.model('users', userSchema)
