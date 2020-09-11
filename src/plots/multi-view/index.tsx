import { defineComponent } from "vue";
import { MultiView, MultiViewOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type MultiViewChartProps = Writeable<
  Omit<G2PlotChartProps<MultiViewOptions>, "chart"> & MultiViewOptions
>;

const MultiViewChart = defineComponent<MultiViewG2PlotChartProps>({
  name: "MultiViewChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={MultiView} {...ctx.attrs} {...props} />;
  },
});

MultiViewChart.install = (app: App) => {
  app.component(MultiViewChart.name, MultiViewChart);
};

export default MultiViewChart;
