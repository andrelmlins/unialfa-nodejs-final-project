import { RequestHandler } from 'express'

import Post from '../../models/post'

const listPosts: RequestHandler = async (req, res) => {
    const user = String(req.query.user_id ?? '')
    let posts

    posts = await Post.find({
        $and: [{ user_id: { $regex: user, $options: 'i' } }],
    }).sort({ dataHora: -1 })

    posts.forEach((posts) => {
        posts.count_comment = posts.comment.length
        posts.count_like = posts.like.length
    })

    res.json({ posts })
}

export default listPosts
