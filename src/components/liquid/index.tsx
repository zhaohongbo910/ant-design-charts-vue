import { defineComponent, App } from "vue";
import { Liquid, LiquidOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type LiquidPlotProps = Writeable<
  Omit<G2PlotChartProps<LiquidOptions>, "chart"> & LiquidOptions
>;

const LiquidPlot = defineComponent<LiquidPlotProps>({
  name: "LiquidPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Liquid} {...ctx.attrs} {...props} />;
  },
});

LiquidPlot.install = (app: App) => {
  app.component(LiquidPlot.name, LiquidPlot);
};

export default LiquidPlot;
