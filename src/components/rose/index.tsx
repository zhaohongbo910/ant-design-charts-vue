import { defineComponent, App } from "vue";
import { Rose, RoseOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type RosePlotProps = Writeable<
  Omit<G2PlotChartProps<RoseOptions>, "chart"> & RoseOptions
>;

const RosePlot = defineComponent<RosePlotProps>({
  name: "RosePlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Rose} {...ctx.attrs} {...props} />;
  },
});

RosePlot.install = (app: App) => {
  app.component(RosePlot.name, RosePlot);
};

export default RosePlot;
