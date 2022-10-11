import { RequestHandler } from 'express'

import Post from '../../models/post'

const deleteLike: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse Post não existe!!!' })
    }

    const liked = post.like.find((like) => like.user_id.equals(req.currentUser._id))

    if (!liked) {
        return res.status(404).send({ message: 'Não exite like seu nesse Post!!!' })
    }

    post.like.id(liked._id)?.remove()

    await post.save()

    return res.status(200).send({ message: 'Like removido!!!' })
}

export default deleteLike
