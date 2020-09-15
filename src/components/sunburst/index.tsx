import { defineComponent, App } from "vue";
import { Sunburst, SunburstOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type SunburstPlotProps = Writeable<
  Omit<G2PlotProps<SunburstOptions>, "chart"> & SunburstOptions
>;

const SunburstPlot = defineComponent<SunburstPlotProps>({
  name: "SunburstPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Sunburst} {...ctx.attrs} {...props} />;
  },
});

SunburstPlot.install = (app: App) => {
  app.component(SunburstPlot.name, SunburstPlot);
};

export default SunburstPlot;
