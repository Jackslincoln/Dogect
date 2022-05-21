const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src') + './dogect-frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, "../src/dist"),
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
  }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/ ,
        exclude: /node modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, './node_modules')
              ]
            }
          }
        ]
      }
    ]
  }
}
