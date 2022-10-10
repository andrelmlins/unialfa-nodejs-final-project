import { Schema, model } from 'mongoose';

import ILike from 'entities/like';

const likeSchema = new Schema<ILike>({
  post_id: { type: String, required: true },
  user_id: { type: String, required: true },
  created_at: { type: Date, required: true },
});

const Like = model('likes', likeSchema);

export default Like;
