import * as dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  ENABLE_HTTP_LOG: process.env.ENABLE_HTTP_LOG || false,
};
