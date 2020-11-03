/*!
 * @author liyuelong1020@gmail.com
 * @date 2020/10/13 013
 * @description Description
 */
class OutputFilter {
  apply (compiler) {
    compiler.hooks.emit.tapAsync('outputFilter', (compilation, callback) => {
      // 删除 base.js
      delete compilation.assets['base.js']
      // 添加空css
      compilation.assets['style/fetch.css'] = {
        size: function () {
          return 0
        },
        source: function () {
          return ' '
        }
      }
      callback()
    });
  }
}

module.exports = OutputFilter;
