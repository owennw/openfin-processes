const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(tsx?|js)$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'ts-loader' },
      ],
    }, {
      test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: { minimize: true }
      }],
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}