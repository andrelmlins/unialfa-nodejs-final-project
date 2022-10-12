import  { RequestHttp } from '../../infra/gateway';

const serviceListComments = async (params?: any) => {
  const request = new RequestHttp('http://comment-nginx');

  const response = await request.get('/comment', params);
  
  return response;
};

export default serviceListComments;
