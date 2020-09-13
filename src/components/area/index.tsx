import { defineComponent, App } from "vue";
import { Area, AreaOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type AreaPlotProps = Writeable<
  Omit<G2PlotChartProps<AreaOptions>, "chart"> & AreaOptions
>;

const AreaPlot = defineComponent<AreaPlotProps>({
  name: "AreaPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Area} {...ctx.attrs} {...props} />;
  },
});

AreaPlot.install = (app: App) => {
  app.component(AreaPlot.name, AreaPlot);
};

export default AreaPlot;
