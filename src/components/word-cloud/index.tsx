import { defineComponent, App } from "vue";
import { WordCloud, WordCloudOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type WordCloudChartProps = Writeable<
  Omit<G2PlotChartProps<WordCloudOptions>, "chart"> & WordCloudOptions
>;

const WordCloudChart = defineComponent<WordCloudChartProps>({
  name: "WordCloudChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={WordCloud} {...ctx.attrs} {...props} />;
  },
});

WordCloudChart.install = (app: App) => {
  app.component(WordCloudChart.name, WordCloudChart);
};

export default WordCloudChart;
