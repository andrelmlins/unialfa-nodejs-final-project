import crypto from 'crypto';

const cryptoPassword = (password: string): string => {
  return crypto
    .createHmac('sha256', process.env.PASSWORD_SECRET as string)
    .update(password)
    .digest('hex');
};

export default cryptoPassword;
