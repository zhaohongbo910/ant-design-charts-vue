// 玫瑰图
import { defineComponent,App } from 'vue'
import { Rose, RoseOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type RosePlotProps = Writeable<Omit<G2PlotProps<RoseOptions>, 'chart'> &
    RoseOptions>

const RosePlot = defineComponent<RosePlotProps>({
    name: 'RosePlot',
    setup(props, ctx) {
    return () => <G2Plot chart={Rose} {...ctx.attrs} {...props} />
    },
})

RosePlot.install = (app: App) => {
    app.component(RosePlot.name, RosePlot)
}

export default RosePlot