import { defineComponent, App } from "vue";
import { Waterfall, WaterfallOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type WaterfallPlotProps = Writeable<
  Omit<G2PlotChartProps<WaterfallOptions>, "chart"> & WaterfallOptions
>;

const WaterfallPlot = defineComponent<WaterfallPlotProps>({
  name: "WaterfallPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Waterfall} {...ctx.attrs} {...props} />;
  },
});

WaterfallPlot.install = (app: App) => {
  app.component(WaterfallPlot.name, WaterfallPlot);
};

export default WaterfallPlot;
