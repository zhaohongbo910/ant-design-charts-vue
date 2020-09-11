import { defineComponent } from "vue";
import { BidirectionalBar, BidirectionalBarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type BidirectionalBarChartProps = Writeable<
  Omit<G2PlotChartProps<BidirectionalBarOptions>, "chart"> &
    BidirectionalBarOptions
>;

const BidirectionalBarChart = defineComponent<BidirectionalBarG2PlotChartProps>(
  {
    name: "BidirectionalBarChart",
    setup(props, ctx) {
      return () => (
        <G2PlotChart chart={BidirectionalBar} {...ctx.attrs} {...props} />
      );
    },
  }
);

BidirectionalBarChart.install = (app: App) => {
  app.component(BidirectionalBarChart.name, BidirectionalBarChart);
};

export default BidirectionalBarChart;
