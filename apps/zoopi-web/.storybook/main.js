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
}