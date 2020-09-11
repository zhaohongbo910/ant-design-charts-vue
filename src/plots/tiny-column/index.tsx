import { defineComponent } from "vue";
import { TinyColumn, TinyColumnOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type TinyColumnChartProps = Writeable<
  Omit<G2PlotChartProps<TinyColumnOptions>, "chart"> & TinyColumnOptions
>;

const TinyColumnChart = defineComponent<TinyColumnG2PlotChartProps>({
  name: "TinyColumnChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyColumn} {...ctx.attrs} {...props} />;
  },
});

TinyColumnChart.install = (app: App) => {
  app.component(TinyColumnChart.name, TinyColumnChart);
};

export default TinyColumnChart;
