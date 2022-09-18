import { RequestHandler } from 'express';
import { isNull } from 'util';

import cryptoPassword from '../../lib/crypto.password';
import User from '../../models/user';

const update: RequestHandler = async (req, res) => {
  const user = await User.findOneAndUpdate(
    { email: req.currentUser.email },
    { password: cryptoPassword(req.body.password) }
  )

  if(!user) {
    return res.json({ message: "Erro ao recuperar usuário atual" });
  }

  return res.json({ user: { ...user.toObject(), password: undefined } });
};

export default update;
