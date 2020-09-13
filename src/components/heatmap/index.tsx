import { defineComponent, App } from "vue";
import { Heatmap, HeatmapOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type HeatmapPlotProps = Writeable<
  Omit<G2PlotChartProps<HeatmapOptions>, "chart"> & HeatmapOptions
>;

const HeatmapPlot = defineComponent<HeatmapPlotProps>({
  name: "HeatmapPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Heatmap} {...ctx.attrs} {...props} />;
  },
});

HeatmapPlot.install = (app: App) => {
  app.component(HeatmapPlot.name, HeatmapPlot);
};

export default HeatmapPlot;
