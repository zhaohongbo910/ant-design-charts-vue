// 迷你图
import { defineComponent,App } from 'vue'
import { TinyColumn, TinyColumnOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type TinyColumnPlotProps = Writeable<Omit<G2PlotProps<TinyColumnOptions>, 'chart'> &
    TinyColumnOptions>

const TinyColumnPlot = defineComponent<TinyColumnPlotProps>({
    name: 'TinyColumnPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={TinyColumn} {...ctx.attrs} {...props} />
    },
})

TinyColumnPlot.install = (app: App) => {
    app.component(TinyColumnPlot.name, TinyColumnPlot)
}

export default TinyColumnPlot