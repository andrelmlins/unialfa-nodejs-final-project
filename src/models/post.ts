import { Schema, model } from 'mongoose'

import IPost from 'entities/post'
import likeSchema from './like'
import commentSchema from './comment'

const postSchema = new Schema<IPost>({
    message: { type: String, required: true },
    user_id: { type: String, required: true },
    dataHora: { type: Date, default: Date.now },
    count_like: { type: Schema.Types.Number },
    count_comment: { type: Schema.Types.Number },
    like: { type: [likeSchema], required: true },
    comment: { type: [commentSchema], required: true },
})

const Post = model('post', postSchema)

export default Post
