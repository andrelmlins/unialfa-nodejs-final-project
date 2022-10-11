import { ErrorRequestHandler } from 'express';

const formatError: ErrorRequestHandler = (err, _, res, next) => {
  if (err && err.error && err.error.isJoi) {
    return res.status(400).json({
      type: err.type,
      message: err.error.toString(),
    });
  }

  next(err);
};

export default formatError;
