import { defineComponent, App } from "vue";
import { Gauge, GaugeOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type GaugePlotProps = Writeable<
  Omit<G2PlotProps<GaugeOptions>, "chart"> & GaugeOptions
>;

const GaugePlot = defineComponent<GaugePlotProps>({
  name: "GaugePlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Gauge} {...ctx.attrs} {...props} />;
  },
});

GaugePlot.install = (app: App) => {
  app.component(GaugePlot.name, GaugePlot);
};

export default GaugePlot;
