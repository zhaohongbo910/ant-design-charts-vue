import { defineComponent, App } from "vue";
import { Waterfall, WaterfallOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type WaterfallPlotProps = Writeable<
  Omit<G2PlotProps<WaterfallOptions>, "chart"> & WaterfallOptions
>;

const WaterfallPlot = defineComponent<WaterfallPlotProps>({
  name: "WaterfallPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Waterfall} {...ctx.attrs} {...props} />;
  },
});

WaterfallPlot.install = (app: App) => {
  app.component(WaterfallPlot.name, WaterfallPlot);
};

export default WaterfallPlot;
