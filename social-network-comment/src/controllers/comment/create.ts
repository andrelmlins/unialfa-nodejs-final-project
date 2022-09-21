import { RequestHandler } from "express";

import Comment from "../../models/comment";

const createComment: RequestHandler = async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    created_at: new Date(),
    post_id: req.body.post_id,
  });

  await comment.save();

  res.json({ comment });
};

export default createComment;
