import { defineComponent, App } from "vue";
import { TinyLine, TinyLineOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type TinyLinePlotProps = Writeable<
  Omit<G2PlotChartProps<TinyLineOptions>, "chart"> & TinyLineOptions
>;

const TinyLinePlot = defineComponent<TinyLinePlotProps>({
  name: "TinyLinePlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyLine} {...ctx.attrs} {...props} />;
  },
});

TinyLinePlot.install = (app: App) => {
  app.component(TinyLinePlot.name, TinyLinePlot);
};

export default TinyLinePlot;
