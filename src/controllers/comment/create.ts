import { Response } from 'express'
import { RequestWithUser } from '../../middleware/authentication'
import { CommentModel } from '../../models/comment'

const createComment = async (req: RequestWithUser, res: Response) => {
  const comment = new CommentModel({
    comment: req.body.comment,
    postId: req.params.id,
    userId: req.user?.id,
    createAt: new Date().getTime(),
  })

  await comment.save()
  res.json({ comment })
}

export default createComment
