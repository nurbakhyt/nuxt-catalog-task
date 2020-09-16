const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

const StylelintPlugin = require('stylelint-webpack-plugin');
const PostcssCustomProperties = require('postcss-custom-properties');
const CssMqpacker = require('css-mqpacker');
const PxToRem = require('postcss-pxtorem');
const ColorMin = require('postcss-colormin');

module.exports = {
  publicPath: '/_nuxt/',
  transpile: [/vue-awesome/],
  extractCSS: {
    ignoreOrder: true, // https://github.com/nuxt/nuxt.js/issues/4885
  },
  postcss: {
    plugins: [
      new PostcssCustomProperties(),
      new CssMqpacker(),
      new PxToRem(),
      new ColorMin(),
    ],
  },
  extend(config, { isClient, isDev }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      });
    }

    /* Purge CSS on the production */
    if (!isDev) {
      config.plugins.push(new PurgecssPlugin({
        paths: glob.sync([
          path.join(process.env.ROOT_DIRNAME, './pages/**/*.vue'),
          path.join(process.env.ROOT_DIRNAME, './layouts/**/*.vue'),
          path.join(process.env.ROOT_DIRNAME, './components/**/*.vue'),
        ]),
        whitelist: [
          'html',
          'body',
        ],
        whitelistPatterns: [
          /.+--.+/, // modifier classes
          /fa-.*/, // vue-awesome icons classes
        ],
      }));
    }

    /* Build source maps every time */
    if (isClient) {
      config.devtool = 'source-map';
    }

    /* Enable stylelint on dev */
    if (isDev) {
      config.plugins.push(new StylelintPlugin({
        files: [
          './**/*.vue',
          './**/*.scss',
        ],
        syntax: 'scss',
      }));
    }
  },
};
