const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
        '@assets': path.resolve(__dirname, 'src', 'assets'),
        '@utils': path.resolve(__dirname, 'src', 'utils'),
        '@atoms': path.resolve(__dirname, 'src', 'atoms'),
        '@molecules': path.resolve(__dirname, 'src', 'molecules'),
        '@plugins': path.resolve(__dirname, 'src', 'plugins'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@styles/_index.scss";',
      },
    },
  },
};
