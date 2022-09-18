import IUser from 'entities/user';
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';

declare global {
  namespace Express {
    interface Request {
      currentUser: IUser;
    }
  }
}

const authentication: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({ message: 'Usuário não está autenticado' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    const currentUser = await User.findById(decoded.sub);

    if (!currentUser) {
      return res.status(401).send({ message: 'Usuário não está autenticado' });
    }

    req.currentUser = currentUser;

    next();
  } catch (e) {
    return res.status(401).send({ message: 'Usuário não está autenticado' });
  }
};

export default authentication;
