import { Schema, model } from 'mongoose';

import IPost from 'entities/post';

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user_id: { type: String, required: true },
  created_at: { type: Date, required: true },
});

const Post = model('posts', postSchema);

export default Post;
