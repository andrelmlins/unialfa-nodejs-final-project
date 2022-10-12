import { Document, Types } from 'mongoose';

interface IPost extends Document {
  title: string;
  content: string;
  user_id: string;
  created_at: Date;
}

export default IPost;
