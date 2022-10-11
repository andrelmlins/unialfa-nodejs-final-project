import { Schema } from 'mongoose'

const commentSchema = new Schema({
    comment: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
})

export default commentSchema
