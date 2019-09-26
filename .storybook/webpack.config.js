const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // css-loader
  config.module.rules[2].use[1].options = {
    importLoaders: 1,
    modules: {
      localIdentName: "[hash:base64:5]",
    }
  }

  // postcss-loader
  config.module.rules[2].use[2].options = {}

  // Return the altered config
  return config
}
