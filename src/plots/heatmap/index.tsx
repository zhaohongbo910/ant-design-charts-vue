import { defineComponent } from "vue";
import { Heatmap, HeatmapOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type HeatmapChartProps = Writeable<
  Omit<G2PlotChartProps<HeatmapOptions>, "chart"> & HeatmapOptions
>;

const HeatmapChart = defineComponent<HeatmapG2PlotChartProps>({
  name: "HeatmapChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Heatmap} {...ctx.attrs} {...props} />;
  },
});

HeatmapChart.install = (app: App) => {
  app.component(HeatmapChart.name, HeatmapChart);
};

export default HeatmapChart;
