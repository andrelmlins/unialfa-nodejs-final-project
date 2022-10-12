import jwt from 'jsonwebtoken';

import Tokens from 'entities/tokens';

const generateTokens = (userId: string): Tokens => {
  const accessToken = jwt.sign({}, process.env.JWT_SECRET as string, {
    expiresIn: 86400,
    subject: userId,
  });

  const refreshToken = jwt.sign({}, process.env.JWT_SECRET_REFRESH as string, {
    expiresIn: 86400 * 5,
    subject: userId,
  });

  return { accessToken, refreshToken };
};

export default generateTokens;
