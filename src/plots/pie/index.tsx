import { defineComponent } from "vue";
import { Pie, PieOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type PieChartProps = Writeable<
  Omit<G2PlotChartProps<PieOptions>, "chart"> & PieOptions
>;

const PieChart = defineComponent<PieG2PlotChartProps>({
  name: "PieChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Pie} {...ctx.attrs} {...props} />;
  },
});

PieChart.install = (app: App) => {
  app.component(PieChart.name, PieChart);
};

export default PieChart;
