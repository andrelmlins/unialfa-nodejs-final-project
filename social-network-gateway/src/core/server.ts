import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

import router from './router';
import formatError from '../middlewares/format.error';

const server = () => {
  const app = express();

  config();

  app.use(bodyParser.json());

  app.use(router.privateRouter);

  app.use(formatError);

  return app;
};

export default server;
