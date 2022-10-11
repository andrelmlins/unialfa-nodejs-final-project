import { RequestHandler } from 'express'
import Post from '../../models/post'

const deletePost: RequestHandler = async (req, res) => {
    const post = await Post.findById(req.body.idPost)

    if (!post) {
        return res.status(404).send({ message: 'Esse post não existe!!!' })
    }

    if (post.user_id != req.currentUser._id) {
        return res.status(404).send({ message: 'Você não pode remover esse post!!!' })
    }

    const result = await Post.deleteOne({ _id: req.body.idPost })

    return res.status(200).send({ message: 'Post removido!!!' })
}

export default deletePost
