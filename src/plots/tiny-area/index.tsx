import { defineComponent } from "vue";
import { TinyArea, TinyAreaOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type TinyAreaChartProps = Writeable<
  Omit<G2PlotChartProps<TinyAreaOptions>, "chart"> & TinyAreaOptions
>;

const TinyAreaChart = defineComponent<TinyAreaG2PlotChartProps>({
  name: "TinyAreaChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyArea} {...ctx.attrs} {...props} />;
  },
});

TinyAreaChart.install = (app: App) => {
  app.component(TinyAreaChart.name, TinyAreaChart);
};

export default TinyAreaChart;
