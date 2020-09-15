import { defineComponent, App } from "vue";
import { RadialBar, RadialBarOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type RadialBarPlotProps = Writeable<
  Omit<G2PlotProps<RadialBarOptions>, "chart"> & RadialBarOptions
>;

const RadialBarPlot = defineComponent<RadialBarPlotProps>({
  name: "RadialBarPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={RadialBar} {...ctx.attrs} {...props} />;
  },
});

RadialBarPlot.install = (app: App) => {
  app.component(RadialBarPlot.name, RadialBarPlot);
};

export default RadialBarPlot;
