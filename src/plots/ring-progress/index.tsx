import { defineComponent } from "vue";
import { RingProgress, RingProgressOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type RingProgressChartProps = Writeable<
  Omit<G2PlotChartProps<RingProgressOptions>, "chart"> & RingProgressOptions
>;

const RingProgressChart = defineComponent<RingProgressG2PlotChartProps>({
  name: "RingProgressChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={RingProgress} {...ctx.attrs} {...props} />;
  },
});

RingProgressChart.install = (app: App) => {
  app.component(RingProgressChart.name, RingProgressChart);
};

export default RingProgressChart;
