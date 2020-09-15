import { defineComponent, App } from "vue";
import { DualAxes, DualAxesOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type DualAxesPlotProps = Writeable<
  Omit<G2PlotProps<DualAxesOptions>, "chart"> & DualAxesOptions
>;

const DualAxesPlot = defineComponent<DualAxesPlotProps>({
  name: "DualAxesPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={DualAxes} {...ctx.attrs} {...props} />;
  },
});

DualAxesPlot.install = (app: App) => {
  app.component(DualAxesPlot.name, DualAxesPlot);
};

export default DualAxesPlot;
