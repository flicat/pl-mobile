const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it')

const md = new MarkdownIt({
  html:         false,        // 在源码中启用 HTML 标签
  breaks:       false,        // 转换段落里的 '\n' 到 <br>。
  linkify:      false,        // 将类似 URL 的文本自动转换为链接。
  typographer:  false,       // 启用一些语言中立的替换 + 引号美化

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
              let html = md.render(source);
              html = html
              // 去掉{{}}转义
              .replace(/\{\{/g, '<span>&#x7B;&#x7B;</span>')
              .replace(/\}\}/g, '<span>&#x7D;&#x7D;</span>')
              // 将MD文件链接改为页面链接
              .replace(/href=".\/docs\/(\w+)\.md"/g, 'href="#/docs/$1"');

              return '<template><div class="markdown-body">' + html + '</div></template>'
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
