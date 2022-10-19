import { Request, Response } from 'express'
import { CommentModel } from '../../models/comment'

const deleteComment = async (req: Request, res: Response) => {
  const comment = await CommentModel.findById(req.params.id)

  if (!comment) {
    return res.status(404).send({ message: 'Comentário não existe' })
  }

  await CommentModel.deleteOne({ _id: req.params.id })

  res.status(204).send()
}

export default deleteComment
