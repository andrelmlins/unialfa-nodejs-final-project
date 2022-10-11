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
    const bearerToken = req.headers.authorization;
    
    if (!bearerToken) {
      return res.status(401).send({ message: 'Usuário não está autenticado' });
    }

    const token = bearerToken.replace("Bearer ","");
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
   
    const currentUser = await User.findById(decoded.sub);

    if (!currentUser) {
      return res.status(401).send({ message: 'Usuário não está autenticado' });
    }

    req.currentUser = currentUser;

    next();
  } catch (e) {
    console.log(e)
    return res.status(401).send({ message: 'Usuário não está autenticado' });
  }
};

export default authentication;
