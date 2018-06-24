/* tslint:disable */
const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map', // eval
  entry: './src/index',

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    pathinfo: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /.*\.tsx?$/,
        include: path.resolve('src'),
        exclude: /node_modules/,
        use: ['awesome-typescript-loader?silent'],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },

  plugins: [ new CheckerPlugin() ],
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
