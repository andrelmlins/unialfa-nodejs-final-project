import { Document, Types } from 'mongoose';

interface ILike extends Document {
  post_id: string;
  user_id: string;
  created_at: Date;
}

export default ILike;
