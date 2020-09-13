import { defineComponent, App } from "vue";
import { Line, LineOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type LinePlotProps = Writeable<
  Omit<G2PlotChartProps<LineOptions>, "chart"> & LineOptions
>;

const LinePlot = defineComponent<LinePlotProps>({
  name: "LinePlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Line} {...ctx.attrs} {...props} />;
  },
});

LinePlot.install = (app: App) => {
  app.component(LinePlot.name, LinePlot);
};

export default LinePlot;
