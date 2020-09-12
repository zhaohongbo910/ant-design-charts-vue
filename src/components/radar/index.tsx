import { defineComponent, App } from "vue";
import { Radar, RadarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type RadarChartProps = Writeable<
  Omit<G2PlotChartProps<RadarOptions>, "chart"> & RadarOptions
>;

const RadarChart = defineComponent<RadarChartProps>({
  name: "RadarChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Radar} {...ctx.attrs} {...props} />;
  },
});

RadarChart.install = (app: App) => {
  app.component(RadarChart.name, RadarChart);
};

export default RadarChart;
