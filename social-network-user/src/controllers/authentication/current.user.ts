import { RequestHandler } from 'express';

const currentUser: RequestHandler = async (req, res) => {
  res.json({ me: { ...req.currentUser.toObject(), password: undefined } });
};

export default currentUser;
