import { defineComponent } from "vue";
import { Stock, StockOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type StockChartProps = Writeable<
  Omit<G2PlotChartProps<StockOptions>, "chart"> & StockOptions
>;

const StockChart = defineComponent<StockG2PlotChartProps>({
  name: "StockChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Stock} {...ctx.attrs} {...props} />;
  },
});

StockChart.install = (app: App) => {
  app.component(StockChart.name, StockChart);
};

export default StockChart;
