import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { RequestWithUser } from '../../middleware/authentication'
import { CommentModel } from '../../models/comment'
import { LikeModel } from '../../models/like'
import { Post, PostModel } from '../../models/post'

export const listPosts = async (req: Request, res: Response) => {
  const posts = await PostModel.find<Post>({
    $or: [
      {
        text: { $regex: req.query?.search ?? '', $options: 'i' },
        title: { $regex: req.query?.search ?? '', $options: 'i' },
      },
    ],
  })

  res.json({
    posts: posts.sort((a, b) => Number(a.createAt) - Number(b.createAt)),
  })
}

export const listPostsByUser = async (req: RequestWithUser, res: Response) => {
  const posts = await PostModel.find({
    userId: new mongoose.Types.ObjectId(req.user?.id),
  })

  const postsWithCommentsAndLikes = await Promise.all(
    posts.map(async (post) => {
      const comments = await CommentModel.find({
        postId: new mongoose.Types.ObjectId(post.id),
      })
      const likes = await LikeModel.find({
        postId: new mongoose.Types.ObjectId(post.id),
      })
      return { ...post.toObject(), comments, likes }
    })
  )

  res.json({
    posts: postsWithCommentsAndLikes,
  })
}

export const listPostById = async (req: RequestWithUser, res: Response) => {
  const post = await PostModel.findById(req.params.id)

  if (!post) {
    return res.status(404).send({ message: 'Postagem não existe' })
  }

  const comments = await CommentModel.find({
    postId: new mongoose.Types.ObjectId(post.id),
  })

  const likes = await LikeModel.find({
    postId: new mongoose.Types.ObjectId(post.id),
  })

  const postsWithCommentsAndLikes = { ...post.toObject(), comments, likes }

  res.json({
    posts: postsWithCommentsAndLikes,
  })
}
