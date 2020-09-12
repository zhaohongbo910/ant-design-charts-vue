import { defineComponent, App } from "vue";
import { Rose, RoseOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type RoseChartProps = Writeable<
  Omit<G2PlotChartProps<RoseOptions>, "chart"> & RoseOptions
>;

const RoseChart = defineComponent<RoseChartProps>({
  name: "RoseChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Rose} {...ctx.attrs} {...props} />;
  },
});

RoseChart.install = (app: App) => {
  app.component(RoseChart.name, RoseChart);
};

export default RoseChart;
