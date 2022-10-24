const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  webpackFinal: async config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(scss)$/,
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
        ],
      },
      plugins: [
        ...config.plugins,
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
      resolve: {
        extensions: ['.js', '.jsx'],
        fallback: { stream: require.resolve('stream-browserify'), buffer: require.resolve('buffer/'), assert: require.resolve('assert/') },
      },
    };
  },
};
