import { defineComponent, App } from "vue";
import { Treemap, TreemapOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type TreemapPlotProps = Writeable<
  Omit<G2PlotChartProps<TreemapOptions>, "chart"> & TreemapOptions
>;

const TreemapPlot = defineComponent<TreemapPlotProps>({
  name: "TreemapPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Treemap} {...ctx.attrs} {...props} />;
  },
});

TreemapPlot.install = (app: App) => {
  app.component(TreemapPlot.name, TreemapPlot);
};

export default TreemapPlot;
