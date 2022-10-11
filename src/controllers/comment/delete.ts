import { RequestHandler } from 'express'

import Post from '../../models/post'

const deleteComment: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse Post não existe!!!' })
    }

    const commented = post.comment.find((comment) => comment.user_id.equals(req.currentUser._id))

    if (!commented) {
        return res.status(404).send({ message: 'Não exite comentario seu nesse Post!!!' })
    }

    post.comment.id(commented._id)?.remove()

    await post.save()

    return res.status(200).send({ message: 'Comentario removido!!!' })
}

export default deleteComment
