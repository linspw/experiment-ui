const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/utils/index.scss";`,
      },
    },
  },
};