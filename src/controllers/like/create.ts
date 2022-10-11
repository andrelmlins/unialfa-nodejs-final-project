import { RequestHandler } from 'express'

import Post from '../../models/post'

const saveLike: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse Post não existe!!!' })
    }

    const liked = post.like.find((like) => like.user_id.equals(req.currentUser._id))

    if (liked) {
        return res.status(404).send({ message: 'Você ja curtiu esse Post!!!' })
    }
    const like = {
        user_id: req.currentUser._id,
    }

    post.like.push(like)

    await post.save()

    res.json({ like: post.like })
}

export default saveLike
