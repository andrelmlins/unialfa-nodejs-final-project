import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import generateTokens from '../../lib/generate.tokens';

const refreshToken: RequestHandler = async (req, res) => {
  try {
    const decodedRefreshToken = jwt.verify(
      req.body.refreshToken,
      process.env.JWT_SECRET_REFRESH as string
    );

    if (decodedRefreshToken.sub != req.currentUser.id) {
      return res
        .status(400)
        .send({ message: 'Token de atualização é inválido' });
    }

    res.json(generateTokens(decodedRefreshToken.sub as string));
  } catch (e) {
    res.status(400).send({ message: 'Token de atualização é inválido' });
  }
};

export default refreshToken;
