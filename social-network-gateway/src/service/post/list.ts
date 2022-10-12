import { RequestHttp } from '../../infra/gateway';

const serviceListPosts = async (params?: any) => {

  const request = new RequestHttp('http://post-nginx');

  const response = await request.get('/posts', params);

  return response;
};

export default serviceListPosts;
