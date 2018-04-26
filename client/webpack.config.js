const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');

// const extractStyles = new ExtractTextPlugin('./styles/[name].css', {
//   allChunks: true
// });

// const entry = {
//   About: resolve('./src/components/About/About.scss')
// }

// const optimizeStyles = new OptimizeCssAssetsPlugin({
//   assetNameRegExp: /\.optimize\.css$/g,
//   cssProcessor: require('cssnano'),
//   cssProcessorOptions: { discardComments: { removeAll: true } },
//   canPrint: true
// });


module.exports = {
  entry: [ 'babel-polyfill', resolve('./src/index') ],
  output: {
    path: resolve('./public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ]
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(pdf|gif|png|jpe?g)$/,
        loader: "file-loader?name=/public/icons/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=1000000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  // plugins: [
  //   extractStyles,
  //   optimizeStyles
  // ],
};

