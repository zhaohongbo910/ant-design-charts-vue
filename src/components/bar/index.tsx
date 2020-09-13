import { defineComponent, App } from "vue";
import { Bar, BarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type BarPlotProps = Writeable<
  Omit<G2PlotChartProps<BarOptions>, "chart"> & BarOptions
>;

const BarPlot = defineComponent<BarPlotProps>({
  name: "BarPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Bar} {...ctx.attrs} {...props} />;
  },
});

BarPlot.install = (app: App) => {
  app.component(BarPlot.name, BarPlot);
};

export default BarPlot;
