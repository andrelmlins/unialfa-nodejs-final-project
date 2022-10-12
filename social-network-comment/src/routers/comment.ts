import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import createComment from '../controllers/comment/create';
import listComments from '../controllers/comment/list';
import deleteComment from '../controllers/comment/delete';

import { commentBodyValidator } from '../validators/comment';

const privateRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

privateRouter.post('/comment', validator.body(commentBodyValidator), createComment);
privateRouter.get('/comment', listComments);
privateRouter.delete('/comment/:id', deleteComment);

export default { privateRouter };
