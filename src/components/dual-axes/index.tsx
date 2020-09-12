import { defineComponent, App } from "vue";
import { DualAxes, DualAxesOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type DualAxesChartProps = Writeable<
  Omit<G2PlotChartProps<DualAxesOptions>, "chart"> & DualAxesOptions
>;

const DualAxesChart = defineComponent<DualAxesChartProps>({
  name: "DualAxesChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={DualAxes} {...ctx.attrs} {...props} />;
  },
});

DualAxesChart.install = (app: App) => {
  app.component(DualAxesChart.name, DualAxesChart);
};

export default DualAxesChart;
