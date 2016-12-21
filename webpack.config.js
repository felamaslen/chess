var path = require('path');

module.exports = {
  entry: './js/src/index.js',
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: '/js/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'js', 'src'),
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  progress: true
}

