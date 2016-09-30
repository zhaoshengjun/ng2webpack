const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const PATHS = {
  dist: path.join(__dirname, '../dist'),
  src:  path.join(__dirname, '../src')
}

const commonConfig = {
  entry: {
    'polyfills': path.join(PATHS.src,'/pollyfill'),
    'vendor':    path.join(PATHS.src,'vendor'),
    'app':       path.join(PATHS.src,'main.ts')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude:path.join(__dirname,'../src/app'),        
        loader: ExtractTextPlugin.extract({
          fallbackLoader:'style-loader', 
          loader:'css?sourceMap'})
      },
      {
        test: /\.css$/,
        include: path.join(__dirname,'../src/app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'polyfills','manifest']  //manifest is important to keep the hash accurate
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

module.exports = {
  PATHS,
  commonConfig
}