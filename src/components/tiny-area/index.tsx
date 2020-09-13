import { defineComponent, App } from "vue";
import { TinyArea, TinyAreaOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type TinyAreaPlotProps = Writeable<
  Omit<G2PlotChartProps<TinyAreaOptions>, "chart"> & TinyAreaOptions
>;

const TinyAreaPlot = defineComponent<TinyAreaPlotProps>({
  name: "TinyAreaPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyArea} {...ctx.attrs} {...props} />;
  },
});

TinyAreaPlot.install = (app: App) => {
  app.component(TinyAreaPlot.name, TinyAreaPlot);
};

export default TinyAreaPlot;
