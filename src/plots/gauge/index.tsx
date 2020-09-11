import { defineComponent } from "vue";
import { Gauge, GaugeOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type GaugeChartProps = Writeable<
  Omit<G2PlotChartProps<GaugeOptions>, "chart"> & GaugeOptions
>;

const GaugeChart = defineComponent<GaugeG2PlotChartProps>({
  name: "GaugeChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Gauge} {...ctx.attrs} {...props} />;
  },
});

GaugeChart.install = (app: App) => {
  app.component(GaugeChart.name, GaugeChart);
};

export default GaugeChart;
