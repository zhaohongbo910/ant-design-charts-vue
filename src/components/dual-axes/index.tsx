import { defineComponent, App } from "vue";
import { DualAxes, DualAxesOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type DualAxesPlotProps = Writeable<
  Omit<G2PlotChartProps<DualAxesOptions>, "chart"> & DualAxesOptions
>;

const DualAxesPlot = defineComponent<DualAxesPlotProps>({
  name: "DualAxesPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={DualAxes} {...ctx.attrs} {...props} />;
  },
});

DualAxesPlot.install = (app: App) => {
  app.component(DualAxesPlot.name, DualAxesPlot);
};

export default DualAxesPlot;
