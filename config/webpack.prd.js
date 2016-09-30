const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(
  common.commonConfig, {
    devtool: 'source-map',
    output: {
      path: common.PATHS.dist,
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          htmlLoader: {
            minimize: false // workaround for ng2
          }
        }
      }),
      new webpack.NoErrorsPlugin(),
      // new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        mangle: {
          keep_fnames: true
        },
        beautify: false,
        comments: false,
        compress:{
          warnings: false,
          drop_console: true
        }
      }),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify(ENV)
        }
      })
    ]
  });