import { RequestHandler } from 'express'

import Post from '../../models/post'

const listLike: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse Post não existe!!!' })
    }

    if (post.like.length == 0) {
        return res.status(404).send({ message: 'Não exite like nesse Post!!!' })
    }

    res.json({ like: post.like })
}

export default listLike
