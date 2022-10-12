import { RequestHandler } from "express";

import Comment from "../../models/comment";

const deleteComment: RequestHandler = async (req, res) => {
  const commentId = req.params.id;

  const comment = await Comment.findById(commentId);

  if (!comment) {
    return res.status(404).send({ message: "Comentário não encontrado" });
  }

  await Comment.deleteOne({ _id: commentId });

  return res.status(204);
}

export default deleteComment;
