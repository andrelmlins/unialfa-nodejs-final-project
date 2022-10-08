import  requestHttp from '../../infra/gateway';

const serviceListPosts = async (id?: string) => {
  const url = id ? `http://localhost:3000/posts/${id}` : 'http://localhost:3000/posts';
  
  await requestHttp(url, 'GET');

  await requestHttp(url, 'GET');
};

export default serviceListPosts;
