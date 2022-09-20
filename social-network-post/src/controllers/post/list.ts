
import { RequestHandler } from 'express';

import Post from '../../models/post';

const listPosts: RequestHandler = async (req, res) => {
	//{{host-social-network-post}}/posts?user=&sort=DESC
	// Se passar usuário ele filtra pelo id usando regex, se não passar ele faz uma busca de todos, se não passar o sort por padrão ele deixa os posts mais recentes

	if (req.query && Object.keys(req.query).length >= 0) {
		const sortType = String(req.query?.sort ?? 'DESC').toUpperCase() === 'DESC' ? -1 : 1;
		const user = String(req.query?.user ?? '');
		const pageQueryParam = Number(req.query?.page ?? 1)
		const page = (pageQueryParam < 1 ? 1 : pageQueryParam) - 1;
		const perPage = Number(req.query?.limit ?? 4);
		// return res.json({'user':user})

		const posts = await Post.find({
			$and: [
				{ user_id: { $regex: user, $options: 'i' } },
			],
		})
		.limit(perPage)
		.skip(perPage * page)
		.sort({ created_at: sortType });

		return res.json({ posts , 'user': user, page , 'offset': perPage * (page === 0 ? 1 : page)})
	}

	const posts = await Post.find({});
  return res.json({ posts });
};

export default listPosts;