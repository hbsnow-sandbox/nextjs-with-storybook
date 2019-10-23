// https://spectrum.chat/next-js/general/trouble-setting-up-storybook-with-typescript~848b00af-ab73-41c8-8e83-e2cecc508d2c

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')]
        }
      }
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}