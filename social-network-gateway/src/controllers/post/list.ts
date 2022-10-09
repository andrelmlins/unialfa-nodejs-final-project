import { RequestHandler } from "express";
import serviceListPosts from "../../service/post/list";

const listPosts: RequestHandler = async (req, res) => {
  const url_post_api = 'http://localhost:8081/posts';
  const id = String(req.query?.id ?? undefined);
  // Se passar usuário ele filtra pelo id usando regex,
  // se não passar ele faz uma busca de todos,
  // se não passar o sort por padrão ele deixa os posts mais recentes

  serviceListPosts(url_post_api, id)

};

export default listPosts;
