import { defineComponent, App } from "vue";
import { Funnel, FunnelOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type FunnelChartProps = Writeable<
  Omit<G2PlotChartProps<FunnelOptions>, "chart"> & FunnelOptions
>;

const FunnelChart = defineComponent<FunnelChartProps>({
  name: "FunnelChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Funnel} {...ctx.attrs} {...props} />;
  },
});

FunnelChart.install = (app: App) => {
  app.component(FunnelChart.name, FunnelChart);
};

export default FunnelChart;
