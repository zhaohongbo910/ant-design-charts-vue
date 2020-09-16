// 桑基图
import { defineComponent,App } from 'vue'
import { Sankey, SankeyOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type SankeyPlotProps = Writeable<Omit<G2PlotProps<SankeyOptions>, 'chart'> &
    SankeyOptions>

const SankeyPlot = defineComponent<SankeyPlotProps>({
    name: 'SankeyPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={Sankey} {...ctx.attrs} {...props} />
    },
})

SankeyPlot.install = (app: App) => {
    app.component(SankeyPlot.name, SankeyPlot)
}

export default SankeyPlot