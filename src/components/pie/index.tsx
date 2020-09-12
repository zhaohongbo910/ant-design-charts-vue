import { defineComponent, App } from "vue";
import { Pie, PieOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type PieChartProps = Writeable<
  Omit<G2PlotChartProps<PieOptions>, "chart"> & PieOptions
>;

const PieChart = defineComponent<PieChartProps>({
  name: "PieChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Pie} {...ctx.attrs} {...props} />;
  },
});

PieChart.install = (app: App) => {
  app.component(PieChart.name, PieChart);
};

export default PieChart;
