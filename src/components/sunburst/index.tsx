import { defineComponent, App } from "vue";
import { Sunburst, SunburstOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type SunburstChartProps = Writeable<
  Omit<G2PlotChartProps<SunburstOptions>, "chart"> & SunburstOptions
>;

const SunburstChart = defineComponent<SunburstChartProps>({
  name: "SunburstChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Sunburst} {...ctx.attrs} {...props} />;
  },
});

SunburstChart.install = (app: App) => {
  app.component(SunburstChart.name, SunburstChart);
};

export default SunburstChart;
