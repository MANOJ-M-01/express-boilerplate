import { Request, Response } from 'express';
import logger from '../utils/logger';

export const register = async (_req: Request, res: Response) => {
  logger.info('new account registraion');
  res.status(201).json({
    message: 'User registered successfully',
  });
};
