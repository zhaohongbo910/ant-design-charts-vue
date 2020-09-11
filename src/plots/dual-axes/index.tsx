import { defineComponent } from "vue";
import { DualAxes, DualAxesOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type DualAxesChartProps = Writeable<
  Omit<G2PlotChartProps<DualAxesOptions>, "chart"> & DualAxesOptions
>;

const DualAxesChart = defineComponent<DualAxesG2PlotChartProps>({
  name: "DualAxesChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={DualAxes} {...ctx.attrs} {...props} />;
  },
});

DualAxesChart.install = (app: App) => {
  app.component(DualAxesChart.name, DualAxesChart);
};

export default DualAxesChart;
