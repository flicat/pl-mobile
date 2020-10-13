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
      callback()
    });
  }
}

module.exports = OutputFilter;
