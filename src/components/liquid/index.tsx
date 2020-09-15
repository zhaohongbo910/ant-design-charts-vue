import { defineComponent, App } from "vue";
import { Liquid, LiquidOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type LiquidPlotProps = Writeable<
  Omit<G2PlotProps<LiquidOptions>, "chart"> & LiquidOptions
>;

const LiquidPlot = defineComponent<LiquidPlotProps>({
  name: "LiquidPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Liquid} {...ctx.attrs} {...props} />;
  },
});

LiquidPlot.install = (app: App) => {
  app.component(LiquidPlot.name, LiquidPlot);
};

export default LiquidPlot;
