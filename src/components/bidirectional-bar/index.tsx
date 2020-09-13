import { defineComponent, App } from "vue";
import { BidirectionalBar, BidirectionalBarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type BidirectionalBarPlotProps = Writeable<
  Omit<G2PlotChartProps<BidirectionalBarOptions>, "chart"> &
    BidirectionalBarOptions
>;

const BidirectionalBarPlot = defineComponent<BidirectionalBarPlotProps>({
  name: "BidirectionalBarPlot",
  setup(props, ctx) {
    return () => (
      <G2PlotChart chart={BidirectionalBar} {...ctx.attrs} {...props} />
    );
  },
});

BidirectionalBarPlot.install = (app: App) => {
  app.component(BidirectionalBarPlot.name, BidirectionalBarPlot);
};

export default BidirectionalBarPlot;
