export function getCompTemplate(chartName: string) {
  return `
    import { defineComponent,App } from 'vue'
    import { ${chartName}, ${chartName}Options } from '@antv/g2plot'
    import G2PlotChart, { G2PlotChartProps } from '../../Base'
    import { Writeable } from '../../types'

    export type ${chartName}PlotProps = Writeable<Omit<G2PlotChartProps<${chartName}Options>, 'chart'> &
      ${chartName}Options>

    const ${chartName}Plot = defineComponent<${chartName}PlotProps>({
      name: '${chartName}Plot',
      setup(props, ctx) {
        return () => <G2PlotChart chart={${chartName}} {...ctx.attrs} {...props} />
      },
    })

    ${chartName}Plot.install = (app: App) => {
      app.component(${chartName}Plot.name, ${chartName}Plot)
    }

    export default ${chartName}Plot
    `;
}

export function exportPlotComponetsToIndex(
  chartName: string,
  importPath: string
) {
  return `
    \nimport { ${chartName}Props as _${chartName}Props } from '${importPath}'
      export { default as ${chartName} } from '${importPath}'
      export type ${chartName}Props = _${chartName}Props
    `;
}

export function getTestContent(chartName: string, cmpPath: string) {
  return `
    import { mount } from '@vue/test-utils'
    import ${chartName}Plot from '../../src/components/${cmpPath}'
    
    const config = {
      data: [],
      xField: 'a',
      yField: 'b',
    } 
    describe('${chartName}Plot', () => {
      test('should render without crashed', () => {
        mount(() => <${chartName}Plot {...config} />)
      })
    })
    `;
}
