import { RequestHandler } from "express";

import Comment from "../../models/comment";

const listComments: RequestHandler = async (req, res) => {
  //{{host-social-network-post}}/posts?user=&sort=DESC
  // Se passar usuário ele filtra pelo id usando regex,
  // se não passar ele faz uma busca de todos,
  // se não passar o sort por padrão ele deixa os posts mais recentes

  if (req.query && Object.keys(req.query).length >= 0) {
    const sortType =
      String(req.query?.sort ?? "DESC").toUpperCase() === "DESC" ? -1 : 1;
    const postId = String(req.query?.id ?? "");
    const pageQueryParam = Number(req.query?.page ?? 1);
    const page = (pageQueryParam < 1 ? 1 : pageQueryParam) - 1;
    const perPage = Number(req.query?.limit ?? 4);

    const comments = await Comment.find({
      $and: [{ post_id: { $regex: postId, $options: "i" } }],
    })
      .limit(perPage)
      .skip(perPage * page)
      .sort({ created_at: sortType });

    return res.json({
      post: postId,
      page,
      offset: perPage * (page === 0 ? 1 : page),
      comments,
    });
  }

  const posts = await Comment.find({});
  return res.json({ posts });
};

export default listComments;
