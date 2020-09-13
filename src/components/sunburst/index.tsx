import { defineComponent, App } from "vue";
import { Sunburst, SunburstOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type SunburstPlotProps = Writeable<
  Omit<G2PlotChartProps<SunburstOptions>, "chart"> & SunburstOptions
>;

const SunburstPlot = defineComponent<SunburstPlotProps>({
  name: "SunburstPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Sunburst} {...ctx.attrs} {...props} />;
  },
});

SunburstPlot.install = (app: App) => {
  app.component(SunburstPlot.name, SunburstPlot);
};

export default SunburstPlot;
