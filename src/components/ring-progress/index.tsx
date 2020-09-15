import { defineComponent, App } from "vue";
import { RingProgress, RingProgressOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type RingProgressPlotProps = Writeable<
  Omit<G2PlotProps<RingProgressOptions>, "chart"> & RingProgressOptions
>;

const RingProgressPlot = defineComponent<RingProgressPlotProps>({
  name: "RingProgressPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={RingProgress} {...ctx.attrs} {...props} />;
  },
});

RingProgressPlot.install = (app: App) => {
  app.component(RingProgressPlot.name, RingProgressPlot);
};

export default RingProgressPlot;
