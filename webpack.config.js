const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const { alias } = require('./config/webpack/alias-config');
const { rules } = require('./config/webpack/rules-config');

module.exports = {
  devtool: 'source-map',
  stats: 'errors-only',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist', 'application'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    exprContextCritical: false,
    rules,
  },
  resolve: {
    alias,
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
    }),
    new VueLoaderPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development', DEBUG: false }),
  ],
};
