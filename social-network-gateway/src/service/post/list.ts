import  requestHttp from '../../infra/gateway';

const serviceListPosts = async (uri: string, id?: string) => {
  const url = id ? `${uri}/posts/${id}` : `${uri}/posts`;
  
  await requestHttp(url, 'GET');

  // await requestHttp(url, 'GET');
};

export default serviceListPosts;
