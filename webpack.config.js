var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    // publicPath: 'dist/' //only use /dist/ instead of ../dist/...
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // find all js file
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist/',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
};
