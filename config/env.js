module.exports = {
  environment: process.env.NODE_ENV, // for some reason nuxt.js can fuck up your process.env.NODE_ENV, so the best way to check environment is to use this variable like const isDev = (process.env.environment !== 'production');
};
