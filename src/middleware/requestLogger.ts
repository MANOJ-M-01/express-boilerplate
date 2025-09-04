import morgan from 'morgan';
import logger from '../utils/logger';
import { env } from '../env';

const stream = {
  write: (message: string) => logger.http(message.trim()),
};

const skip = () => env.ENABLE_HTTP_LOG !== 'true';

export default morgan('combined', { stream, skip });
