/**
 * 一键同步 G2Plot v2 API 文档
 * 默认路径为 G2Plot/examples 下的一级目录
 * eg:
 * -全量同步：`node scripts/api.js en`
 * -单一同步：`node scripts/api.js zh Bar`
 */
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const { lowerCase, upperCase, toHump, toLine } = require('./util.js');
const { ChartsLevel } = require('./constants');
const { mdprima } = require('./mdprima.js');

const apiPath = '../docs/.g2plot-plot-api';

const excludeFiles = ['gallery', 'dynamic-plots', 'case', 'general']; // 不处理的路径
const arg = process.argv.splice(2);
console.log("🚀 ~ file: api.js ~ line 19 ~ arg", arg)

const extralPath = ChartsLevel[arg[1]] ? `${ChartsLevel[arg[1]]}` : '';

const fp = arg.length > 1
  ? path.resolve('../', `G2Plot/examples${extralPath}/${toLine(lowerCase(arg[1]))}`)
  : path.resolve('../', `G2Plot/examples`);

console.log(fp)

const apiGenerator = (filePath, chartName) => {
  // 文件路径，上层自动扫描
  const res = remark().use().processSync(fs.readFileSync(filePath));
  console.log("🚀 ~ file: api.js ~ line 32 ~ apiGenerator ~ res", res)

  const language = arg[0] === 'zh' ? '.zh-CN' : '';
  const contents =
    arg[0] === 'zh'
      ? res.contents.replace(/##\W*\S*\W*xA;\S*\W*\S*/, '')
      : res.contents.replace(/##\W*\S*\W*xA;\S*\W*\S*/, '');
  // replace 去掉 title
  // fs.writeFileSync(path.resolve(__dirname, apiPath, `${chartName}${language}.md`), contents);
};

/**
 * 文件扫描，获取所有 API.zh.md 文件路径
 * @param {foldPath} string 扫描路径
 */
const scanFiles = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      const director = path.join(foldPath + '/', fileName);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${fileName}` : fileName);
      }
      const language = arg[0] === 'en' ? 'API.en.md' : 'API.zh.md';
      if (stats.isFile() && fileName === language) {
        const chartName = dir.split('.')[0];
        if (!excludeFiles.includes(chartName)) {
          const apiPath = path.resolve(
            __dirname,
            `../../G2Plot/examples${extralPath}`,
            dir.split('.').join('/'),
            fileName,
          );
          if (ChartsLevel[toHump(upperCase(dir.split('.')[1]))]) {
            apiGenerator(apiPath, dir.split('.')[1]);
          } else {
            apiGenerator(apiPath, chartName);
          }
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp, toLine(lowerCase(arg[1])));
