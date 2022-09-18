import { Router } from 'express';

import authenticationRouter from '../routers/authentication';

const privateRouter = Router();
const publicRouter = Router();

publicRouter.use(authenticationRouter.publicRouter);

privateRouter.use(authenticationRouter.privateRouter);

export default { privateRouter, publicRouter };
