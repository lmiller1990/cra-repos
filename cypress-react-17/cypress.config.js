const { defineConfig } = require("cypress");
const webpack = require('webpack'

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        plugins: [
          new webpack.IgnorePlugin({
            resourceRegExp: /react-dom\/client$/,
            contextRegExp: /(cypress\/react|@storybook\/react)/, // TODO this needs to work for both in our MONOREPO and in the user's NODE_MODULES
          })
        ]
      }
    },
  },
});
