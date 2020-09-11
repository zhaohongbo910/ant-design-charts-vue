import { defineComponent } from "vue";
import { Scatter, ScatterOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type ScatterChartProps = Writeable<
  Omit<G2PlotChartProps<ScatterOptions>, "chart"> & ScatterOptions
>;

const ScatterChart = defineComponent<ScatterG2PlotChartProps>({
  name: "ScatterChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Scatter} {...ctx.attrs} {...props} />;
  },
});

ScatterChart.install = (app: App) => {
  app.component(ScatterChart.name, ScatterChart);
};

export default ScatterChart;
