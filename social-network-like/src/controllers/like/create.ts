import { RequestHandler } from 'express';

import Like from '../../models/like';

const addLike: RequestHandler = async (req, res) => {
  const like = new Like({
    post_id: req.body.post_id,
    user_id: req.body.user_id,
    created_at: new Date()
  });

  await like.save();

  res.json({ like });
};

export default addLike;
