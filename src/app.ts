import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import requestLogger from './middleware/requestLogger';
import notFoundHandler from './middleware/notFoundHandler';
import errorHandler from './middleware/errorHandler';
import { authRoutes } from './routes';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const app = express();
app.use(limiter);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.use(requestLogger);

app.get('/', async (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is healthy' });
});

app.use('/auth', authRoutes);

// 404 handler: Catch all non-existing routes
app.use(notFoundHandler);

// General error handler: For internal server errors
app.use(errorHandler);

export default app;
