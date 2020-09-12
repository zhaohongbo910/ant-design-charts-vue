import { defineComponent, App } from "vue";
import { TinyArea, TinyAreaOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type TinyAreaChartProps = Writeable<
  Omit<G2PlotChartProps<TinyAreaOptions>, "chart"> & TinyAreaOptions
>;

const TinyAreaChart = defineComponent<TinyAreaChartProps>({
  name: "TinyAreaChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={TinyArea} {...ctx.attrs} {...props} />;
  },
});

TinyAreaChart.install = (app: App) => {
  app.component(TinyAreaChart.name, TinyAreaChart);
};

export default TinyAreaChart;
