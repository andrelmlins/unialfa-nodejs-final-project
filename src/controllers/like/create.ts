import { Response } from 'express'
import { RequestWithUser } from '../../middleware/authentication'
import { LikeModel } from '../../models/like'

const createLike = async (req: RequestWithUser, res: Response) => {
  const [like] = await LikeModel.find({ postId: req.params.id })

  if (!like) {
    const like = new LikeModel({
      postId: req.params.id,
      userId: req.user?.id,
      createAt: new Date().getTime(),
    })

    await like.save()

    return res.status(201).send({ like: like.toObject() })
  }

  await LikeModel.deleteOne({ _id: like._id })

  res.status(204).send()
}

export default createLike
