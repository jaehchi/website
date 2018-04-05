const { resolve } = require('path');

module.exports = {
  entry: resolve('../src/index.js'),
  output: {
    path: resolve('../public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
      // {
      //   test: /\.(scss|css)$/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader'],
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
