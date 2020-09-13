import { defineComponent, App } from "vue";
import { Histogram, HistogramOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type HistogramPlotProps = Writeable<
  Omit<G2PlotChartProps<HistogramOptions>, "chart"> & HistogramOptions
>;

const HistogramPlot = defineComponent<HistogramPlotProps>({
  name: "HistogramPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Histogram} {...ctx.attrs} {...props} />;
  },
});

HistogramPlot.install = (app: App) => {
  app.component(HistogramPlot.name, HistogramPlot);
};

export default HistogramPlot;
