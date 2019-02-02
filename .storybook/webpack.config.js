const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
  test: /\.scss$/,
  loaders: ["style-loader", "css-loader", "sass-loader"],
  include: path.resolve(__dirname, "../")
}, {
  test: /\.(ts|tsx)$/,
  use: [{
    loader: require.resolve('awesome-typescript-loader')
  }, {
    loader: require.resolve('react-docgen-typescript-loader')
  }]
});
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
