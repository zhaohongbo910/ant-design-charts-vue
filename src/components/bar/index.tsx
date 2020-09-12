import { defineComponent, App } from "vue";
import { Bar, BarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type BarChartProps = Writeable<
  Omit<G2PlotChartProps<BarOptions>, "chart"> & BarOptions
>;

const BarChart = defineComponent<BarChartProps>({
  name: "BarChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Bar} {...ctx.attrs} {...props} />;
  },
});

BarChart.install = (app: App) => {
  app.component(BarChart.name, BarChart);
};

export default BarChart;
