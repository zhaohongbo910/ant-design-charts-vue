import { defineComponent, App } from "vue";
import { RingProgress, RingProgressOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type RingProgressChartProps = Writeable<
  Omit<G2PlotChartProps<RingProgressOptions>, "chart"> & RingProgressOptions
>;

const RingProgressChart = defineComponent<RingProgressChartProps>({
  name: "RingProgressChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={RingProgress} {...ctx.attrs} {...props} />;
  },
});

RingProgressChart.install = (app: App) => {
  app.component(RingProgressChart.name, RingProgressChart);
};

export default RingProgressChart;
