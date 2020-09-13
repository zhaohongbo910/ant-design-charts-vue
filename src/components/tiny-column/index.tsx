import { defineComponent, App } from "vue";
import { TinyColumn, TinyColumnOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type TinyColumnPlotProps = Writeable<
  Omit<G2PlotChartProps<TinyColumnOptions>, "chart"> & TinyColumnOptions
>;

const TinyColumnPlot = defineComponent<TinyColumnPlotProps>({
  name: "TinyColumnPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyColumn} {...ctx.attrs} {...props} />;
  },
});

TinyColumnPlot.install = (app: App) => {
  app.component(TinyColumnPlot.name, TinyColumnPlot);
};

export default TinyColumnPlot;
