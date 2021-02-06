// Loading log from module logger.js
// It is better to write this require function in constant.
const logger = require('./logger');

// By a module with only function, call this.
logger('message');