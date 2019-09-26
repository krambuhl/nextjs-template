module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-import')({
      addModulesDirectories: [
        'styles/variables'
      ]
    }),
    require('postcss-nested'),
    require('postcss-responsive-type'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': false
      }
    }),
    require('postcss-reporter')
  ]
}
