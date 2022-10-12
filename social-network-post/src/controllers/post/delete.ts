import { RequestHandler } from 'express';

import Post from '../../models/post';

const deletePost: RequestHandler = async (req, res) => {
	const postId = req.params.id;
  
	const post = await Post.findById(req.params.id);

	if (!post) {
    return res.status(404).send({ message: 'Post não existe' });
  }

  await Post.deleteOne({ _id: req.params.id });

	return res.status(204);
};

export default deletePost;
