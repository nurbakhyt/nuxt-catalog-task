process.env.ROOT_DIRNAME = __dirname;

const requireDir = require('require-dir');

const config = requireDir('./config');
module.exports = config;
