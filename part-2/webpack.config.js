const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  entry: {
    entry: './client/js/index.js'
  },
  output: {
    path: path.join(__dirname, '/.tmp/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader' // inject CSS to page
        }, {
          loader: 'css-loader' // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: () => // post css plugins, can be exported to postcss.config.js
              [
                precss,
                autoprefixer
              ]
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/pages/homepage-webpack.ejs'
    })
  ]
};
