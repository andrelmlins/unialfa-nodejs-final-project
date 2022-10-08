import  requestHttp from '../../infra/gateway';

const serviceListComments = async (id?: string ) => {
  requestHttp({ id }, 'http://localhost:3000/comments', 'GET');
};

export default serviceListComments;
