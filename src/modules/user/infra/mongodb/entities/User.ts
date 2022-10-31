import { Schema, model, Model } from 'mongoose'
import { IUser } from './IUser'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

export const User: Model<IUser> = model('users', userSchema)


