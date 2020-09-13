import { defineComponent, App } from "vue";
import { Stock, StockOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type StockPlotProps = Writeable<
  Omit<G2PlotChartProps<StockOptions>, "chart"> & StockOptions
>;

const StockPlot = defineComponent<StockPlotProps>({
  name: "StockPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Stock} {...ctx.attrs} {...props} />;
  },
});

StockPlot.install = (app: App) => {
  app.component(StockPlot.name, StockPlot);
};

export default StockPlot;
