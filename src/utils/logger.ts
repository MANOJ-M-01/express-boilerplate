import { createLogger, addColors, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// Define custom log levels and colors
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'grey',
  },
};

// Apply custom colors
addColors(customLevels.colors);

// Define log format
const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message}`;
});

// Setup daily rotating file transport
const dailyRotateFile = new DailyRotateFile({
  filename: 'logs/app-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d',
  zippedArchive: true,
});

// Create logger instance
const logger = createLogger({
  levels: customLevels.levels,
  level: 'http', // Set the minimum level to log (captures http and above)
  format: format.combine(format.colorize(), format.timestamp(), logFormat),
  transports: [
    new transports.Console({ format: format.combine(format.colorize(), format.simple()) }),
    dailyRotateFile,
  ],
  exceptionHandlers: [new transports.File({ filename: 'logs/exceptions.log' })],
});

export default logger;
