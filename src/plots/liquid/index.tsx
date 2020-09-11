import { defineComponent } from "vue";
import { Liquid, LiquidOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type LiquidChartProps = Writeable<
  Omit<G2PlotChartProps<LiquidOptions>, "chart"> & LiquidOptions
>;

const LiquidChart = defineComponent<LiquidG2PlotChartProps>({
  name: "LiquidChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Liquid} {...ctx.attrs} {...props} />;
  },
});

LiquidChart.install = (app: App) => {
  app.component(LiquidChart.name, LiquidChart);
};

export default LiquidChart;
