const path = require("path");

module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "staticDirs": ["../public"],
  webpackFinal: async config => {
    config.resolve.alias["@web"] = path.resolve(__dirname, "../");

    return config
  },
  // ref: https://github.com/storybookjs/storybook/issues/7540#issuecomment-934216060
  babel: async (options) => {
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
}