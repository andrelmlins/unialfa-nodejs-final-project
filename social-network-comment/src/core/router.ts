import { Router } from 'express';

import commentRouter from '../routers/comment';
const privateRouter = Router();
const publicRouter = Router();

privateRouter.use(commentRouter.privateRouter);

export default { privateRouter, publicRouter };
