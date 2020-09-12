import { defineComponent, App } from "vue";
import { Area, AreaOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type AreaChartProps = Writeable<
  Omit<G2PlotChartProps<AreaOptions>, "chart"> & AreaOptions
>;

const AreaChart = defineComponent<AreaChartProps>({
  name: "AreaChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Area} {...ctx.attrs} {...props} />;
  },
});

AreaChart.install = (app: App) => {
  app.component(AreaChart.name, AreaChart);
};

export default AreaChart;
