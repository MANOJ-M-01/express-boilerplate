import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const notFoundHandler = (req: Request, res: Response, _next: NextFunction) => {
  logger.warn(`🚨 Cannot ${req.method} ${req.originalUrl}`); // Log the invalid route request

  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
};

export default notFoundHandler;
