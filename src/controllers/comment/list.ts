import { RequestHandler } from 'express'

import Post from '../../models/post'

const listComment: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse Post não existe!!!' })
    }

    if (post.comment.length == 0) {
        return res.status(404).send({ message: 'Não exite Comentarios nesse Post!!!' })
    }

    res.json({ like: post.comment })
}

export default listComment
