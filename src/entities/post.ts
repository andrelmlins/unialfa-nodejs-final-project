import { Date, Document, Types } from 'mongoose'
import IComment from './comment'
import ILike from './like'

interface IPost extends Document {
    message: string
    user_id: string
    dataHora: Date
    count_like: number
    count_comment: number
    like: Types.DocumentArray<ILike>
    comment: Types.DocumentArray<IComment>
}

export default IPost
