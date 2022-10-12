import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import createGateway from '../controllers/gateway/create';
import listGateway from '../controllers/gateway/list';
import deleteGateway from '../controllers/gateway/delete';

import listPosts from '../controllers/post/list';

import { gatewayBodyValidator } from '../validators/gateway';

const privateRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

privateRouter.get('/posts', listPosts);
// privateRouter.post('/posts', validator.body(postBodyValidator), createPost);
// privateRouter.delete('/posts/:id', deletePost);

privateRouter.post('/gateway', validator.body(gatewayBodyValidator), createGateway);
privateRouter.get('/gateway', listGateway);
privateRouter.delete('/gateway/:id', deleteGateway);

export default { privateRouter };
