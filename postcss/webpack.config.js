const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                ["autoprefixer", {}],
                ["postcss-focus", {}],
                ["postcss-responsive-type", {}],
                ["postcss-font-magician", {}],
                ["cssnano", {}],
                ["postcss-preset-env", {}],
                ["postcss-resemble-image", {}],
                ["postcss-mixins", {}],
                ["postcss-inline-media", {}],
                ["postcss-center", {}],
                ["doiuse", {
                  browsers: [
                    'ie >= 11',
                    '> 2%'
                  ],
                }],
              ],
            },
          },
        },
      ],
    },]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
}