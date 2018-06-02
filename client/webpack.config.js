require('dotenv').config();
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { resolve } = require('path');
const webpack = require('webpack');

const extractStyles = new MiniCssExtractPlugin({
  filename: "main.css",
  chunkFilename: "[id].css"
})


const optimizeStyles = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.optimize\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});


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
        loaders: [ MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            minimize: true || {/* CSSNano Options */}
          }
        }, 'sass-loader'],
      },
      {
        test: /\.(pdf|gif|png|jpe?g)$/,
        loader: "file-loader?name=/images/[name].[ext]"
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
  plugins: [
    new UglifyJsPlugin(),
    extractStyles,
    optimizeStyles,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'SMTP_SERVER_LOCAL_HOST': JSON.stringify(process.env.SMTP_SERVER_LOCAL_HOST),
        'SMTP_SERVER_AWS_HOST': JSON.stringify(process.env.SMTP_SERVER_AWS_HOST)
      }
    })
  ]
};
