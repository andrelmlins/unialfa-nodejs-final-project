import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import router from './router';
import authentication from '../middlewares/authentication';
import formatError from '../middlewares/format.error';

const server = () => {
  const app = express();

  mongoose.connect('mongodb://localhost:27017/uniAlfa');
  config();

  app.use(bodyParser.json());

  app.use(router.publicRouter);
  app.use(authentication);
  app.use(router.privateRouter);

  app.use(formatError);

  return app;
};

export default server;