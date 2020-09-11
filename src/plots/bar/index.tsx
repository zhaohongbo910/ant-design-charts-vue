import { defineComponent } from "vue";
import { Bar, BarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type BarChartProps = Writeable<
  Omit<G2PlotChartProps<BarOptions>, "chart"> & BarOptions
>;

const BarChart = defineComponent<BarG2PlotChartProps>({
  name: "BarChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Bar} {...ctx.attrs} {...props} />;
  },
});

BarChart.install = (app: App) => {
  app.component(BarChart.name, BarChart);
};

export default BarChart;
