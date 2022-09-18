import { RequestHandler } from 'express';

import Post from '../../models/post';

const createPost: RequestHandler = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
    created_at: new Date()
  });

  await post.save();

  res.json({ post });
};

export default createPost;
