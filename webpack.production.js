const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
require('dotenv').config();

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          // 'webp-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'PORT': JSON.stringify(process.env.PORT),
        'STATIC_DIRECTORY': JSON.stringify(process.env.STATIC_DIRECTORY),
      }
    })
  ]
});
