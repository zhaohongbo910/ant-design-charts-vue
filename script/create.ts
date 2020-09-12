import * as g2plot from "@antv/g2plot";
import path from "path";
import { existsSync, mkdirSync, promises } from "fs";
import { ESLint } from "eslint";
import decamelize from "decamelize";
import {
  getCompTemplate,
  exportPlotComponetsToIndex,
  getTestContent,
} from "./temp";
import eslintConfig from "../.eslintrc.js";

const pwd = process.cwd();
const plotDir = path.resolve(pwd, "src/components");
const exportPath = path.resolve(pwd, "src/index.ts");
const testDir = path.resolve(pwd, "test/components");

const g2ChartsList: string[] = [];

function existsDir() {
  // eslint-disable-next-line prettier/prettier
  [plotDir, testDir].forEach((dir) => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  });
}

function getPlotComponents() {
  const { Plot } = g2plot;
  Object.entries(g2plot).forEach(async ([chartName, module]: [string, any]) => {
    try {
      if (module.prototype instanceof Plot && chartName !== "P") {
        // const filePath = path.resolve(
        //   plotDir,
        //   `${decamelize(chartName, { separator: '-' })}/index.tsx`
        // )
        // if (!existsSync(filePath)) {
        g2ChartsList.push(chartName);
        // }
      }
    } catch (error) {
      console.log("🚀 ~ file:error", error);
    }
  });
}

function getChartConfig(chart: string) {
  return {
    componetName: `${chart}Chart`,
    componetPath: decamelize(chart, { separator: "-" }),
  };
}

async function eslintFixFileContent(fileContent: string, filePath: string) {
  const lintResult = await new ESLint({
    extensions: [".tsx"],
    baseConfig: eslintConfig as any,
    fix: true,
  }).lintText(fileContent, { filePath });
  const code = lintResult[0].output || "";
  return code;
}

async function createComponents() {
  const promisesMap = g2ChartsList.map(async (chart) => {
    const componentContent = getCompTemplate(chart);
    const { componetPath } = getChartConfig(chart);
    const dirPath = path.resolve(plotDir, componetPath);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.resolve(dirPath, `index.tsx`);
    const fixedContent = await eslintFixFileContent(componentContent, filePath);
    await promises.writeFile(filePath, fixedContent, { encoding: "utf8" });
  });
  await Promise.all(promisesMap);
}

async function addExportIndex() {
  let exportFileContent = "";
  g2ChartsList.forEach((chart) => {
    const { componetPath, componetName } = getChartConfig(chart);
    const importPath = `./components/${componetPath}`;
    const content = exportPlotComponetsToIndex(componetName, importPath);
    exportFileContent += content;
  });
  const fixedContent = await eslintFixFileContent(
    exportFileContent,
    exportPath
  );
  await promises.writeFile(exportPath, fixedContent, { encoding: "utf8" });
}

async function createTestCases() {
  const promisesTest = g2ChartsList.map(async (chart) => {
    const { componetPath } = getChartConfig(chart);
    const cmp = getTestContent(chart, componetPath);
    const filePath = path.resolve(testDir, `${componetPath}.spec.tsx`);
    const fixedContent = await eslintFixFileContent(cmp, filePath);
    await promises.writeFile(filePath, fixedContent, { encoding: "utf8" });
  });
  await Promise.all(promisesTest);
}
// eslint-disable-next-line prettier/prettier
(async () => {
  existsDir();
  getPlotComponents();
  await createComponents();
  await addExportIndex();
  await createTestCases();
})();
