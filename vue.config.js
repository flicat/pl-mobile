module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'demo/main.js',
      template: 'demo/index.html',
      filename: 'index.html',
      title: 'UI Mobile 测试 demo',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}
