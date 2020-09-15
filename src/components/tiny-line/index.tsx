import { defineComponent, App } from "vue";
import { TinyLine, TinyLineOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type TinyLinePlotProps = Writeable<
  Omit<G2PlotProps<TinyLineOptions>, "chart"> & TinyLineOptions
>;

const TinyLinePlot = defineComponent<TinyLinePlotProps>({
  name: "TinyLinePlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={TinyLine} {...ctx.attrs} {...props} />;
  },
});

TinyLinePlot.install = (app: App) => {
  app.component(TinyLinePlot.name, TinyLinePlot);
};

export default TinyLinePlot;
