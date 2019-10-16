const fs = require('fs');
const path = require('path');
const OSS = require('ali-oss');
const ora = require('ora');
const chalk = require('chalk') ;

const baseModule = 'poly-frontend-oss/ui-mobile';
const localDir = path.resolve(__dirname, '../lib');

let client = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: 'LTAI4uDVAIYWtB9d',
  accessKeySecret: 'brGgTREeNAC1ZOCGB4i7ASOuF1rpuJ',
  bucket: 'poly-apt-oss'
});

// 遍历文件
let readFiles = function (dir, url, result) {
  let files = fs.readdirSync(dir);

  files.forEach(function (filename) {
    let stats = fs.statSync(path.join(dir, filename));
    let currentPath = url + '/' + filename;

    if (stats.isFile()) {
      result.push(currentPath)
    } else if (stats.isDirectory()) {
      readFiles(path.join(dir, filename), currentPath, result);
    }
  });
};

let files = [];
readFiles(localDir, '', files);

const spinner = ora(`正在上传至 ${baseModule}...`);
spinner.start();

// 上传至阿里云oss
Promise.all(files.map(url => client.put(baseModule + url, path.join(localDir, url)))).then(result => {
  spinner.stop();
  console.log(chalk.red('文件列表：'));
  console.log(result.map(item => item.url).join('\n'));
  console.log('\n', chalk.green('上传成功！'));
}).catch(e => {
  spinner.stop();
  console.error(e);
});
