import { Types, Document } from 'mongoose'

interface IComment extends Document {
    comment: string
    user_id: Types.ObjectId
}

export default IComment
