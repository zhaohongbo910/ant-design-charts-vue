import { defineComponent } from "vue";
import { Column, ColumnOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type ColumnChartProps = Writeable<
  Omit<G2PlotChartProps<ColumnOptions>, "chart"> & ColumnOptions
>;

const ColumnChart = defineComponent<ColumnG2PlotChartProps>({
  name: "ColumnChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Column} {...ctx.attrs} {...props} />;
  },
});

ColumnChart.install = (app: App) => {
  app.component(ColumnChart.name, ColumnChart);
};

export default ColumnChart;
