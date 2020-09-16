// 词云图
import { defineComponent,App } from 'vue'
import { WordCloud, WordCloudOptions } from '@antv/g2plot'
import G2Plot, { G2PlotProps } from '../../Base'
import { Writeable } from '../../types'

export type WordCloudPlotProps = Writeable<Omit<G2PlotProps<WordCloudOptions>, 'chart'> &
    WordCloudOptions>

const WordCloudPlot = defineComponent<WordCloudPlotProps>({
    name: 'WordCloudPlot',
    setup(props, ctx) {
    return () => <G2Plot chart={WordCloud} {...ctx.attrs} {...props} />
    },
})

WordCloudPlot.install = (app: App) => {
    app.component(WordCloudPlot.name, WordCloudPlot)
}

export default WordCloudPlot