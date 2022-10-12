import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import currentUser from '../controllers/authentication/current.user';
import login from '../controllers/authentication/login';
import refreshToken from '../controllers/authentication/refresh.token';
import register from '../controllers/authentication/register';
import updateUser from '../controllers/authentication/update';

import {
  loginValidator,
  registerValidator,
  updateValidator
} from '../validators/authentication';

const privateRouter = Router();
const publicRouter = Router();
const validator = createValidator({ passError: true });

publicRouter.post('/users/register', validator.body(registerValidator), register);
publicRouter.post('/users/login', validator.body(loginValidator), login);
privateRouter.get('/users/me', currentUser);
privateRouter.post('/users/refresh', refreshToken);
privateRouter.patch('/users/update', validator.body(updateValidator), updateUser)

export default { privateRouter, publicRouter };
