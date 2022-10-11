import { number } from 'joi'
import { Schema } from 'mongoose'

const likeSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, required: true },
})

export default likeSchema
