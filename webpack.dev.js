const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 3050,
    hot: true,
    historyApiFallback: true,
    proxy: { '/api': `http://localhost:${process.env.PORT}` },
    stats: 'minimal',
  },
})
