import { Router } from 'express';

import gatewayRouter from '../routers/gateway';
const privateRouter = Router();
const publicRouter = Router();

privateRouter.use(gatewayRouter.privateRouter);

export default { privateRouter, publicRouter };
