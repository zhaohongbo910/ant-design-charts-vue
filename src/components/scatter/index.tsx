import { defineComponent, App } from "vue";
import { Scatter, ScatterOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type ScatterPlotProps = Writeable<
  Omit<G2PlotChartProps<ScatterOptions>, "chart"> & ScatterOptions
>;

const ScatterPlot = defineComponent<ScatterPlotProps>({
  name: "ScatterPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Scatter} {...ctx.attrs} {...props} />;
  },
});

ScatterPlot.install = (app: App) => {
  app.component(ScatterPlot.name, ScatterPlot);
};

export default ScatterPlot;
