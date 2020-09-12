import { defineComponent, App } from "vue";
import { Stock, StockOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type StockChartProps = Writeable<
  Omit<G2PlotChartProps<StockOptions>, "chart"> & StockOptions
>;

const StockChart = defineComponent<StockChartProps>({
  name: "StockChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Stock} {...ctx.attrs} {...props} />;
  },
});

StockChart.install = (app: App) => {
  app.component(StockChart.name, StockChart);
};

export default StockChart;
