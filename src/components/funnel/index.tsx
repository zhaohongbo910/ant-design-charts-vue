import { defineComponent, App } from "vue";
import { Funnel, FunnelOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type FunnelPlotProps = Writeable<
  Omit<G2PlotChartProps<FunnelOptions>, "chart"> & FunnelOptions
>;

const FunnelPlot = defineComponent<FunnelPlotProps>({
  name: "FunnelPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Funnel} {...ctx.attrs} {...props} />;
  },
});

FunnelPlot.install = (app: App) => {
  app.component(FunnelPlot.name, FunnelPlot);
};

export default FunnelPlot;
