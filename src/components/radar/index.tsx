// 雷达图
import { defineComponent,App } from 'vue'
import { Radar, RadarOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type RadarPlotProps = Writeable<Omit<G2PlotProps<RadarOptions>, 'chart'> &
    RadarOptions>

const RadarPlot = defineComponent<RadarPlotProps>({
    name: 'RadarPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={Radar} {...ctx.attrs} {...props} />
    },
})

RadarPlot.install = (app: App) => {
    app.component(RadarPlot.name, RadarPlot)
}

export default RadarPlot