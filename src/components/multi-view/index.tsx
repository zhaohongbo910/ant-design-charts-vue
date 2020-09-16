// 多图层图表
import { defineComponent,App } from 'vue'
import { MultiView, MultiViewOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type MultiViewPlotProps = Writeable<Omit<G2PlotProps<MultiViewOptions>, 'chart'> &
    MultiViewOptions>

const MultiViewPlot = defineComponent<MultiViewPlotProps>({
    name: 'MultiViewPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={MultiView} {...ctx.attrs} {...props} />
    },
})

MultiViewPlot.install = (app: App) => {
    app.component(MultiViewPlot.name, MultiViewPlot)
}

export default MultiViewPlot