import { RequestHandler } from 'express';

import cryptoPassword from '../../lib/crypto.password';
import generateTokens from '../../lib/generate.tokens';
import User from '../../models/user';

const login: RequestHandler = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: cryptoPassword(req.body.password),
  });

  if (!user) {
    return res.status(401).send({ message: 'Email ou senha são inválidos' });
  }

  res.json(generateTokens(user.id));
};

export default login;
