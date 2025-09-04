import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  logger.error(`❌ ${req.method} ${req.originalUrl} - ${err.message}`);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

export default errorHandler;
