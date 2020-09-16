// 子弹图
import { defineComponent,App } from 'vue'
import { Bullet, BulletOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type BulletPlotProps = Writeable<Omit<G2PlotProps<BulletOptions>, 'chart'> &
    BulletOptions>

const BulletPlot = defineComponent<BulletPlotProps>({
    name: 'BulletPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={Bullet} {...ctx.attrs} {...props} />
    },
})

BulletPlot.install = (app: App) => {
    app.component(BulletPlot.name, BulletPlot)
}

export default BulletPlot