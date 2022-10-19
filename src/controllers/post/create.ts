import { Response } from 'express'
import { RequestWithUser } from '../../middleware/authentication'
import { PostModel } from '../../models/post'

const createPost = async (req: RequestWithUser, res: Response) => {
  const post = new PostModel({
    title: req.body.title,
    text: req.body.text,
    userId: req.user?.id,
    createAt: new Date().getTime(),
  })

  await post.save()

  res.json({ post })
}

export default createPost
