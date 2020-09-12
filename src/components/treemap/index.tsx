import { defineComponent, App } from "vue";
import { Treemap, TreemapOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type TreemapChartProps = Writeable<
  Omit<G2PlotChartProps<TreemapOptions>, "chart"> & TreemapOptions
>;

const TreemapChart = defineComponent<TreemapChartProps>({
  name: "TreemapChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Treemap} {...ctx.attrs} {...props} />;
  },
});

TreemapChart.install = (app: App) => {
  app.component(TreemapChart.name, TreemapChart);
};

export default TreemapChart;
