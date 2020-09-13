import { defineComponent, App } from "vue";
import { RadialBar, RadialBarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type RadialBarPlotProps = Writeable<
  Omit<G2PlotChartProps<RadialBarOptions>, "chart"> & RadialBarOptions
>;

const RadialBarPlot = defineComponent<RadialBarPlotProps>({
  name: "RadialBarPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={RadialBar} {...ctx.attrs} {...props} />;
  },
});

RadialBarPlot.install = (app: App) => {
  app.component(RadialBarPlot.name, RadialBarPlot);
};

export default RadialBarPlot;
