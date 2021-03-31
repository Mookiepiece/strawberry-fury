const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackBar = require('webpackbar');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = process.env.NODE_ENV !== 'production';

const basicConfig = {
  mode: process.env.NODE_ENV,
  devtool: 'eval-cheap-module-source-map',
  entry: ['./src/index.tsx'],
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js',
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.json'],
    alias: {
      '🦌': path.resolve(__dirname, './src'),
      '🦄': path.resolve(__dirname, '../strawberry-fury/src'),
      starfall: path.resolve(__dirname, '../starfall/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.md$/,
        use: ['raw-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: dev
    ? {
        historyApiFallback: true,
        disableHostCheck: true,
        overlay: true,
        port: 8888,
        hot: true,
        open: true,
      }
    : undefined,

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new WebpackBar({ color: '#DC9FB4' }),
  ],
};

if (!dev) {
  basicConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = basicConfig;
