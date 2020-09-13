import { defineComponent, App } from "vue";
import { Pie, PieOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type PiePlotProps = Writeable<
  Omit<G2PlotChartProps<PieOptions>, "chart"> & PieOptions
>;

const PiePlot = defineComponent<PiePlotProps>({
  name: "PiePlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Pie} {...ctx.attrs} {...props} />;
  },
});

PiePlot.install = (app: App) => {
  app.component(PiePlot.name, PiePlot);
};

export default PiePlot;
