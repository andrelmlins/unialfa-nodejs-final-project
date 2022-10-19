import { Request, Response } from 'express'
import { PostModel } from '../../models/post'

const deletePost = async (req: Request, res: Response) => {
  const post = await PostModel.findById(req.params.id)

  if (!post) {
    return res.status(404).send({ message: 'Postagem não existe' })
  }

  await PostModel.deleteOne({ _id: req.params.id })

  res.status(204).send()
}

export default deletePost
