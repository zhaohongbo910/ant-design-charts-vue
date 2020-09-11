import { defineComponent } from "vue";
import { Sankey, SankeyOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type SankeyChartProps = Writeable<
  Omit<G2PlotChartProps<SankeyOptions>, "chart"> & SankeyOptions
>;

const SankeyChart = defineComponent<SankeyG2PlotChartProps>({
  name: "SankeyChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Sankey} {...ctx.attrs} {...props} />;
  },
});

SankeyChart.install = (app: App) => {
  app.component(SankeyChart.name, SankeyChart);
};

export default SankeyChart;
