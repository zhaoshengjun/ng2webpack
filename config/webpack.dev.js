const webpackMerge      = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common      = require('./webpack.common');

module.exports = webpackMerge(common.commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: common.PATHS.dist,
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {    
    inline: true,    
    historyApiFallback: true,
    stats: 'errors-only'
  }
});