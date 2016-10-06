const path = require('path');

module.exports = {
  entry: {
    graphql: './src/handler.js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: __dirname,
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
