import { Document, Types } from 'mongoose';

interface IComment extends Document {
  content: string;
  created_at: Date;
  post_id: string;
}

export default IComment;
