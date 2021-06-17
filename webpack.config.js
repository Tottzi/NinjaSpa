const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /* ... */
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
};
