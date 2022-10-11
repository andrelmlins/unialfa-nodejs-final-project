import { RequestHandler } from 'express'

import Post from '../../models/post'

const saveComment: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse Post não existe!!!' })
    }

    const comment = post.comment.find((comment) => comment.user_id.equals(req.currentUser._id))

    if (comment) {
        post.comment.id(comment._id)!.comment = req.body.comment
    } else {
        const comment = {
            comment: req.body.comment,
            user_id: req.currentUser._id,
        }

        post.comment.push(comment)
    }

    await post.save()

    res.json({ comment: post.comment })
}

export default saveComment
