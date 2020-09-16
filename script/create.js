const g2plot = require("@antv/g2plot");
const path = require("path");
const decamelize = require("decamelize");
const ejs = require('ejs')
const fs = require("fs");
const { chartNames } = require('./constants.js')
const pwd = process.cwd();
const plotDir = path.resolve(pwd, "src/components");
const exportPath = path.resolve(pwd, "src/index.ts");
const testDir = path.resolve(pwd, "tests/components");

const templateChartPath = path.join(__dirname, "../template/chart/chart.ejs");

const templateExportPath = path.join(__dirname, "../template/chart/export.ejs");
function createComponents() {
  const { Plot } = g2plot;
  let exportHtml = ""
  try {
    Object.entries(g2plot).forEach(([chartName, module]) => {
      if (module.prototype instanceof Plot && chartName !== "P") {
        const componetPath = decamelize(chartName, { separator: "-" })
        const dirPath = path.resolve(plotDir, componetPath);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        ejs.renderFile(templateChartPath, { chartName, name: chartNames[chartName] }, (err, code) => {
          if (err) {
            throw err
          }
          fs.writeFileSync(`${dirPath}/index.tsx`, code, { encoding: "utf-8" })
        })
        const importPath = `./components/${componetPath}`;

        ejs.renderFile(templateExportPath, {
          chartName,
          importPath: importPath,
          name: chartNames[chartName]
        }, (err, code) => {
          if (err) {
            throw err
          }
          exportHtml += code
        })
      }
    });
    console.log("chart success")
    fs.writeFileSync(exportPath, exportHtml, { encoding: 'utf-8' })
    console.log('export index success')
  } catch (error) {
    console.log("🚀 ~ file:error", error);
  }
}

createComponents()



