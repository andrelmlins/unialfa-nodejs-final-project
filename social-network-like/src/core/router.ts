import { Router } from 'express';

import likeRouter from '../routers/like';

const privateRouter = Router();

privateRouter.use(likeRouter.privateRouter);

export default { privateRouter };
