import { defineComponent, App } from "vue";
import { Column, ColumnOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type ColumnPlotProps = Writeable<
  Omit<G2PlotChartProps<ColumnOptions>, "chart"> & ColumnOptions
>;

const ColumnPlot = defineComponent<ColumnPlotProps>({
  name: "ColumnPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Column} {...ctx.attrs} {...props} />;
  },
});

ColumnPlot.install = (app: App) => {
  app.component(ColumnPlot.name, ColumnPlot);
};

export default ColumnPlot;
