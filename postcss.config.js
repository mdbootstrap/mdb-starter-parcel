const purgecss = require('@fullhuman/postcss-purgecss')

const purgecssConfig = purgecss({
  content: ['./**/*.html', './node_modules/mdb-ui-kit/js/mdb.min.js'],
  css: ['./node-modules/mdb-ui-kit/**/*.css'],
});

const plugins = [
  require('postcss-import'),
  require('postcss-url'),
  require('postcss-custom-properties'),
];

const env = process.env.NODE_ENV;

module.exports = {
  plugins: env === 'production' ? [...plugins, purgecssConfig] : plugins,
};