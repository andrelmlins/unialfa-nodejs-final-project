import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

import detailUser from '../controllers/authentication/detailUser';
import login from '../controllers/authentication/login';
import refreshToken from '../controllers/authentication/refresh.token';
import resetPassword from '../controllers/authentication/resetPassword';
import register from '../controllers/authentication/register';

import {
  loginValidator,
  registerValidator,
  resetPasswordValidator,
} from '../validators/authentication';

const privateRouter = Router();
const publicRouter = Router();
const validator = createValidator({ passError: true });

publicRouter.post('/register', validator.body(registerValidator), register);
publicRouter.post('/login', validator.body(loginValidator), login);
privateRouter.get('/detail', detailUser);
privateRouter.post('/refresh', refreshToken);
privateRouter.post('/resetpassword', validator.body(resetPasswordValidator), resetPassword);

export default { privateRouter, publicRouter };
