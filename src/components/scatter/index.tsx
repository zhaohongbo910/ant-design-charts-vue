import { defineComponent, App } from "vue";
import { Scatter, ScatterOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type ScatterPlotProps = Writeable<
  Omit<G2PlotProps<ScatterOptions>, "chart"> & ScatterOptions
>;

const ScatterPlot = defineComponent<ScatterPlotProps>({
  name: "ScatterPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Scatter} {...ctx.attrs} {...props} />;
  },
});

ScatterPlot.install = (app: App) => {
  app.component(ScatterPlot.name, ScatterPlot);
};

export default ScatterPlot;
