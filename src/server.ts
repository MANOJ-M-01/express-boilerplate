import { env } from './env';
import app from './app';
import logger from './utils/logger';

app.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT}`);
});
