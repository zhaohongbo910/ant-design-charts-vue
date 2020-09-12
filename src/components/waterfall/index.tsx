import { defineComponent, App } from "vue";
import { Waterfall, WaterfallOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type WaterfallChartProps = Writeable<
  Omit<G2PlotChartProps<WaterfallOptions>, "chart"> & WaterfallOptions
>;

const WaterfallChart = defineComponent<WaterfallChartProps>({
  name: "WaterfallChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Waterfall} {...ctx.attrs} {...props} />;
  },
});

WaterfallChart.install = (app: App) => {
  app.component(WaterfallChart.name, WaterfallChart);
};

export default WaterfallChart;
