/* tslint:disable */
const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebPackPlugin = require('html-webpack-plugin');

console.log('dev');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const plugins = () => {
  const array = [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
  ];

  return array;
};

module.exports = {
  mode: 'development',
  devtool: 'eval', // eval
  entry: './src/App',

  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
    pathinfo: true,
  },

  devServer: {
    contentBase: path.join(__dirname, '..', 'src'),
    compress: true,
    port: 3000,
    stats: 'errors-only',
    hot: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /.*\.tsx?$/,
        include: path.resolve('../src'),
        exclude: /node_modules/,
        use: ['awesome-typescript-loader?silent'],
      },
    ],
  },

  plugins: [new CheckerPlugin(), htmlPlugin],
  externals: [],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    should: 'empty',
    'sinon-restore': 'empty',
    child_process: 'empty',
  },
};
