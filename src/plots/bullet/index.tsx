import { defineComponent } from "vue";
import { Bullet, BulletOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../components/Base";
import { Writeable } from "../../types";

export type BulletChartProps = Writeable<
  Omit<G2PlotChartProps<BulletOptions>, "chart"> & BulletOptions
>;

const BulletChart = defineComponent<BulletG2PlotChartProps>({
  name: "BulletChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Bullet} {...ctx.attrs} {...props} />;
  },
});

BulletChart.install = (app: App) => {
  app.component(BulletChart.name, BulletChart);
};

export default BulletChart;
