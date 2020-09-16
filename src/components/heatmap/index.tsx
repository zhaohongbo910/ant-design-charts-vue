// 热力图
import { defineComponent,App } from 'vue'
import { Heatmap, HeatmapOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type HeatmapPlotProps = Writeable<Omit<G2PlotProps<HeatmapOptions>, 'chart'> &
    HeatmapOptions>

const HeatmapPlot = defineComponent<HeatmapPlotProps>({
    name: 'HeatmapPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={Heatmap} {...ctx.attrs} {...props} />
    },
})

HeatmapPlot.install = (app: App) => {
    app.component(HeatmapPlot.name, HeatmapPlot)
}

export default HeatmapPlot