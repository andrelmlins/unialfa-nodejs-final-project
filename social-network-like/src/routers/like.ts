import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import addLike from '../controllers/like/create';
import deleteLike from '../controllers/like/delete';
import listLikes from '../controllers/like/list';

import { likeBodyValidator } from '../validators/like';

const privateRouter = Router();
const validator = createValidator({ joi: { convert: false }, passError: true });

privateRouter.get('/likes', listLikes);
privateRouter.post('/likes', validator.body(likeBodyValidator), addLike);
privateRouter.delete('/likes/:id', deleteLike);

export default { privateRouter };
