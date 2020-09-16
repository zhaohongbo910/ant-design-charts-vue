// 条形图
import { defineComponent,App } from 'vue'
import { Bar, BarOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type BarPlotProps = Writeable<Omit<G2PlotProps<BarOptions>, 'chart'> &
    BarOptions>

const BarPlot = defineComponent<BarPlotProps>({
    name: 'BarPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={Bar} {...ctx.attrs} {...props} />
    },
})

BarPlot.install = (app: App) => {
    app.component(BarPlot.name, BarPlot)
}

export default BarPlot