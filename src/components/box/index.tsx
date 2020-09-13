import { defineComponent, App } from "vue";
import { Box, BoxOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type BoxPlotProps = Writeable<
  Omit<G2PlotChartProps<BoxOptions>, "chart"> & BoxOptions
>;

const BoxPlot = defineComponent<BoxPlotProps>({
  name: "BoxPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Box} {...ctx.attrs} {...props} />;
  },
});

BoxPlot.install = (app: App) => {
  app.component(BoxPlot.name, BoxPlot);
};

export default BoxPlot;
