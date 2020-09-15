import { defineComponent, App } from "vue";
import { Histogram, HistogramOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type HistogramPlotProps = Writeable<
  Omit<G2PlotProps<HistogramOptions>, "chart"> & HistogramOptions
>;

const HistogramPlot = defineComponent<HistogramPlotProps>({
  name: "HistogramPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Histogram} {...ctx.attrs} {...props} />;
  },
});

HistogramPlot.install = (app: App) => {
  app.component(HistogramPlot.name, HistogramPlot);
};

export default HistogramPlot;
