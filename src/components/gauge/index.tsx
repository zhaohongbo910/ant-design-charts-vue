import { defineComponent, App } from "vue";
import { Gauge, GaugeOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type GaugePlotProps = Writeable<
  Omit<G2PlotChartProps<GaugeOptions>, "chart"> & GaugeOptions
>;

const GaugePlot = defineComponent<GaugePlotProps>({
  name: "GaugePlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Gauge} {...ctx.attrs} {...props} />;
  },
});

GaugePlot.install = (app: App) => {
  app.component(GaugePlot.name, GaugePlot);
};

export default GaugePlot;
