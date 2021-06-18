const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
    new webpack.DefinePlugin({
      // Definitions...
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
    }),
  ],
  module: {
    rules: [
      // Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // // Images
      //
      //   test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      //   type: 'asset/resource',
      // },
      // img loader
      {
        test: /\.(jpeg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      // fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // css, postcss and sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};