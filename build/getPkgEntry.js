/*!
 * @author liyuelong1020@gmail.com
 * @date 2020/10/10 010
 * @description Description
 */
const path = require('path');
const fs = require('fs');

function getEntry (dir) {
  return fs.readdirSync(path.resolve(dir))
}

module.exports = getEntry
