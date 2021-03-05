const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
        '@assets': path.relative(__dirname, 'src', 'assets'),
        '@utils': path.relative(__dirname, 'src', 'utils'),
        '@atoms': path.relative(__dirname, 'src', 'atoms'),
        '@plugins': path.relative(__dirname, 'src', 'plugins'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@styles/index.scss";',
      },
    },
  },
};
