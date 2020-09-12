import { defineComponent, App } from "vue";
import { Bullet, BulletOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type BulletChartProps = Writeable<
  Omit<G2PlotChartProps<BulletOptions>, "chart"> & BulletOptions
>;

const BulletChart = defineComponent<BulletChartProps>({
  name: "BulletChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Bullet} {...ctx.attrs} {...props} />;
  },
});

BulletChart.install = (app: App) => {
  app.component(BulletChart.name, BulletChart);
};

export default BulletChart;
