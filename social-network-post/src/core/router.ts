import { Router } from 'express';

import postRouter from '../routers/post';

const privateRouter = Router();

privateRouter.use(postRouter.privateRouter);

export default { privateRouter };
