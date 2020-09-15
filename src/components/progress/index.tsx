import { defineComponent, App } from "vue";
import { Progress, ProgressOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type ProgressPlotProps = Writeable<
  Omit<G2PlotProps<ProgressOptions>, "chart"> & ProgressOptions
>;

const ProgressPlot = defineComponent<ProgressPlotProps>({
  name: "ProgressPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Progress} {...ctx.attrs} {...props} />;
  },
});

ProgressPlot.install = (app: App) => {
  app.component(ProgressPlot.name, ProgressPlot);
};

export default ProgressPlot;
