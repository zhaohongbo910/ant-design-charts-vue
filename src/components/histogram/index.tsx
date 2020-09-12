import { defineComponent, App } from "vue";
import { Histogram, HistogramOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type HistogramChartProps = Writeable<
  Omit<G2PlotChartProps<HistogramOptions>, "chart"> & HistogramOptions
>;

const HistogramChart = defineComponent<HistogramChartProps>({
  name: "HistogramChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Histogram} {...ctx.attrs} {...props} />;
  },
});

HistogramChart.install = (app: App) => {
  app.component(HistogramChart.name, HistogramChart);
};

export default HistogramChart;
