const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
        },
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
    }),
    new CopyWebpackPlugin([
      { from: 'openfin.json', to: './openfin.json' },
    ]),
  ]
}