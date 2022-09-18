import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import createPost from '../controllers/post/create';
// import deletePost from '../controllers/post/delete';
// import listPosts from '../controllers/post/list';
// import readPost from '../controllers/post/read';

import { postBodyValidator } from '../validators/post';

const privateRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

// privateRouter.get('/posts', listPosts);
privateRouter.post('/posts', validator.body(postBodyValidator), createPost);
// privateRouter.get('/posts/:id', readPost);
// privateRouter.delete('/posts/:id', deletePost);

export default { privateRouter };
