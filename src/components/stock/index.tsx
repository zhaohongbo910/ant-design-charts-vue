import { defineComponent, App } from "vue";
import { Stock, StockOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type StockPlotProps = Writeable<
  Omit<G2PlotProps<StockOptions>, "chart"> & StockOptions
>;

const StockPlot = defineComponent<StockPlotProps>({
  name: "StockPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Stock} {...ctx.attrs} {...props} />;
  },
});

StockPlot.install = (app: App) => {
  app.component(StockPlot.name, StockPlot);
};

export default StockPlot;
