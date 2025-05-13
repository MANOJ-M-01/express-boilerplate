import morgan from 'morgan';
import logger from '../utils/logger';
import config from '../config';

const stream = {
  write: (message: string) => logger.http(message.trim()),
};

const skip = () => config.ENABLE_HTTP_LOG !== 'true';

export default morgan('combined', { stream, skip });
