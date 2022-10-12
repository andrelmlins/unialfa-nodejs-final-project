import { RequestHandler } from "express";

const listGateway: RequestHandler = async (req, res) => {
  // Se passar usuário ele filtra pelo id usando regex,
  // se não passar ele faz uma busca de todos,
  // se não passar o sort por padrão ele deixa os posts mais recentes

};

export default listGateway;
