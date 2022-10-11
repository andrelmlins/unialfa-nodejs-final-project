import { RequestHandler } from 'express'

import Post from '../../models/post'

const createPost: RequestHandler = async (req, res) => {
    const post = new Post({
        message: req.body.message,
        user_id: req.currentUser._id,
    })

    await post.save()

    res.json({ post })
}

export default createPost
