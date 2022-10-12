import { RequestHttp } from '../../infra/gateway';

const serviceListLikes = async (params?: any) => {

  const request = new RequestHttp('http://like-nginx');

  const response = await request.get('/likes', params);

  return response;
};

export default serviceListLikes;
