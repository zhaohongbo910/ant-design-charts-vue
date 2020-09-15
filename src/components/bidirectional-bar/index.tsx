import { defineComponent, App } from "vue";
import { BidirectionalBar, BidirectionalBarOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type BidirectionalBarPlotProps = Writeable<
  Omit<G2PlotProps<BidirectionalBarOptions>, "chart"> & BidirectionalBarOptions
>;

const BidirectionalBarPlot = defineComponent<BidirectionalBarPlotProps>({
  name: "BidirectionalBarPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={BidirectionalBar} {...ctx.attrs} {...props} />;
  },
});

BidirectionalBarPlot.install = (app: App) => {
  app.component(BidirectionalBarPlot.name, BidirectionalBarPlot);
};

export default BidirectionalBarPlot;
