const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
  },
  ...(!env.production && { devtool: 'inline-source-map' }),
  mode: env.production ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: { stream: require.resolve('stream-browserify'), buffer: require.resolve('buffer/'), assert: require.resolve('assert/') },
  },
});
