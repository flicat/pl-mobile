const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({
  linkify: false,
  typographer: false,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // 使用额外的默认转义
  }
})

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
      title: 'UI Mobile',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'ware-loader',
          enforce: 'pre',
          options: {
            raw: true,
            middleware: function(source) {
              return `<template><div class="markdown-body">${md.render(source)}</div></template>`
            }
          }
        },
        {
          test: /\.md$/,
          use: 'vue-loader'
        }
      ]
    }
  }
}
