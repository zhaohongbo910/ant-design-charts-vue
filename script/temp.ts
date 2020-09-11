export function getCompTemplate(chart: string) {
    return `
    import { defineComponent } from 'vue'
    import { ${chart}, ${chart}Options } from '@antv/g2plot'
    import G2PlotChart, { G2PlotChartProps } from '../../components/Base'
    import { Writeable } from '../../types'

    export type ${chart}ChartProps = Writeable<Omit<G2PlotChartProps<${chart}Options>, 'chart'> &
      ${chart}Options>

    const ${chart}Chart = defineComponent<${chart}G2PlotChartProps>({
      name: '${chart}Chart',
      setup(props, ctx) {
        return () => <G2PlotChart chart={${chart}} {...ctx.attrs} {...props} />
      },
    })

    ${chart}Chart.install = (app: App) => {
      app.component(${chart}Chart.name, ${chart}Chart)
    }

    export default ${chart}Chart
    `
}


export function exportPlotComponetsToIndex(chartName,path) {
    return `
    \nimport { ${chartName}Props as _${chartName}Props } from '${importPath}'
      export { default as ${chartName} } from '${importPath}'
      export type ${chartName}Props = _${chartName}Props
    `
}


export function getTestContent(chart, cmpPath) {
    return `
    import { mount } from '@vue/test-utils'
    import ${chart}Chart from '../../src/plots/${cmpPath}'
    
    const config = {
      data: [],
      xField: 'a',
      yField: 'b',
    }
    
    describe('${chart}Chart', () => {
      test('should render without crashed', () => {
        mount(() => <${chart}Chart {...config} />)
      })
    })
    `
}

