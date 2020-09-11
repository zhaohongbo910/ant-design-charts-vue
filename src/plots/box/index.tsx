import { defineComponent } from "vue";
import { Box, BoxOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type BoxChartProps = Writeable<
  Omit<G2PlotChartProps<BoxOptions>, "chart"> & BoxOptions
>;

const BoxChart = defineComponent<BoxG2PlotChartProps>({
  name: "BoxChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Box} {...ctx.attrs} {...props} />;
  },
});

BoxChart.install = (app: App) => {
  app.component(BoxChart.name, BoxChart);
};

export default BoxChart;
