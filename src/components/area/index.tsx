import { defineComponent, App } from "vue";
import { Area, AreaOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type AreaPlotProps = Writeable<
  Omit<G2PlotProps<AreaOptions>, "chart"> & AreaOptions>;

const AreaPlot = defineComponent<AreaPlotProps>({
  name: "AreaPlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Area} {...ctx.attrs} {...props} />;
  },
});

AreaPlot.install = (app: App) => {
  app.component(AreaPlot.name, AreaPlot);
};

export default AreaPlot;
