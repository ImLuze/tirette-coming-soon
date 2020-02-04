require('dotenv').config();
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    overlay: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new Dotenv()
  ],
});
