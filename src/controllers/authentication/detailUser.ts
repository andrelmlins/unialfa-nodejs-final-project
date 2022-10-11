import { RequestHandler } from 'express';

const detailUser: RequestHandler = async (req, res) => {
  res.json({  ...req.currentUser.toObject(), password: undefined  });
};

export default detailUser;
