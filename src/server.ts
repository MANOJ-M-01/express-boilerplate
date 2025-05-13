import config from './config';
import app from './app';
import logger from './utils/logger';

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
