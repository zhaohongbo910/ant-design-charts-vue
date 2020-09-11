import { defineComponent } from "vue";
import { Rose, RoseOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type RoseChartProps = Writeable<
  Omit<G2PlotChartProps<RoseOptions>, "chart"> & RoseOptions
>;

const RoseChart = defineComponent<RoseG2PlotChartProps>({
  name: "RoseChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Rose} {...ctx.attrs} {...props} />;
  },
});

RoseChart.install = (app: App) => {
  app.component(RoseChart.name, RoseChart);
};

export default RoseChart;
