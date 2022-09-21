import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import createComment from '../controllers/comment/create';

import { commentBodyValidator } from '../validators/comment';

const privateRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

privateRouter.post('/comment', validator.body(commentBodyValidator), createComment);

export default { privateRouter };
