import { defineComponent, App } from "vue";
import { Funnel, FunnelOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type FunnelPlotProps = Writeable<
  Omit<G2PlotProps<FunnelOptions>, "chart"> & FunnelOptions
>;

const FunnelPlot = defineComponent<FunnelPlotProps>({
  name: "FunnelPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Funnel} {...ctx.attrs} {...props} />;
  },
});

FunnelPlot.install = (app: App) => {
  app.component(FunnelPlot.name, FunnelPlot);
};

export default FunnelPlot;
