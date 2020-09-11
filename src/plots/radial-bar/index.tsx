import { defineComponent } from "vue";
import { RadialBar, RadialBarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type RadialBarChartProps = Writeable<
  Omit<G2PlotChartProps<RadialBarOptions>, "chart"> & RadialBarOptions
>;

const RadialBarChart = defineComponent<RadialBarG2PlotChartProps>({
  name: "RadialBarChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={RadialBar} {...ctx.attrs} {...props} />;
  },
});

RadialBarChart.install = (app: App) => {
  app.component(RadialBarChart.name, RadialBarChart);
};

export default RadialBarChart;
