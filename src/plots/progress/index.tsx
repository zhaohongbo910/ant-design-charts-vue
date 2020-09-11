import { defineComponent } from "vue";
import { Progress, ProgressOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type ProgressChartProps = Writeable<
  Omit<G2PlotChartProps<ProgressOptions>, "chart"> & ProgressOptions
>;

const ProgressChart = defineComponent<ProgressG2PlotChartProps>({
  name: "ProgressChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Progress} {...ctx.attrs} {...props} />;
  },
});

ProgressChart.install = (app: App) => {
  app.component(ProgressChart.name, ProgressChart);
};

export default ProgressChart;
