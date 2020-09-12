import { defineComponent, App } from "vue";
import { TinyLine, TinyLineOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type TinyLineChartProps = Writeable<
  Omit<G2PlotChartProps<TinyLineOptions>, "chart"> & TinyLineOptions
>;

const TinyLineChart = defineComponent<TinyLineChartProps>({
  name: "TinyLineChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyLine} {...ctx.attrs} {...props} />;
  },
});

TinyLineChart.install = (app: App) => {
  app.component(TinyLineChart.name, TinyLineChart);
};

export default TinyLineChart;
