module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    enforce: 'pre',
    loader: 'eslint-loader',
  })

  storybookBaseConfig.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  })

  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
    ],
  })

  storybookBaseConfig.module.rules.push({
    test: /\.(woff|woff2|eot|ttf)$/,
    loader: 'file-loader',
  })

  storybookBaseConfig.module.rules.push({
    test: /\.svg$/,
    loader: 'svg-inline-loader',
  })

  return storybookBaseConfig
}
