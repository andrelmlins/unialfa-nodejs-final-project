import { Schema, model } from 'mongoose';

import IComment from '../entities/comment';

const commentSchema = new Schema<IComment>({
  content: { type: String, required: true },
  created_at: { type: Date, required: true },
  post_id: { type: String, required: true },
})

const Comment = model('comments', commentSchema);

export default Comment;
