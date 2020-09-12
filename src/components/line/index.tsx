import { defineComponent, App } from "vue";
import { Line, LineOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type LineChartProps = Writeable<
  Omit<G2PlotChartProps<LineOptions>, "chart"> & LineOptions
>;

const LineChart = defineComponent<LineChartProps>({
  name: "LineChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Line} {...ctx.attrs} {...props} />;
  },
});

LineChart.install = (app: App) => {
  app.component(LineChart.name, LineChart);
};

export default LineChart;
