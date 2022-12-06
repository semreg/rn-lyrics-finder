module.exports = api => {
  api.cache(true)

  return ({
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            common: './src/common'
          }
        }
      ]
    ]
  })
}
