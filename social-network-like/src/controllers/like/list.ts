
import { RequestHandler } from 'express';

import Like from '../../models/like';

const listLikes: RequestHandler = async (req, res) => {

	if (req.query && Object.keys(req.query).length > 0) {
		const sortType = String(req.query?.sort ?? 'DESC').toUpperCase() === 'DESC' ? -1 : 1;
		const post = String(req.query?.post ?? '');
		const pageQueryParam = Number(req.query?.page ?? 1);
		const page = (pageQueryParam < 1 ? 1 : pageQueryParam) - 1;
		const perPage = Number(req.query?.limit ?? 4);

		const likes = await Like.find({
			post_id: {
				$in	: post.split(",")
				
			}
		})
		.limit(perPage)
		.skip(perPage * page)
		.sort({ created_at: sortType });

		return res.json({ likes , page , 'offset': perPage * (page === 0 ? 1 : page)})
	}

	const likes = await Like.find({});
  	return res.json({ likes });
};

export default listLikes;