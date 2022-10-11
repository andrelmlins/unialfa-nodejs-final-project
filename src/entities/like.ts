import { Types, Document } from 'mongoose'

interface ILike extends Document {
    user_id: Types.ObjectId
}

export default ILike
