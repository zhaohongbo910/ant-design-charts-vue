import { defineComponent, App } from "vue";
import { MultiView, MultiViewOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type MultiViewPlotProps = Writeable<
  Omit<G2PlotChartProps<MultiViewOptions>, "chart"> & MultiViewOptions
>;

const MultiViewPlot = defineComponent<MultiViewPlotProps>({
  name: "MultiViewPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={MultiView} {...ctx.attrs} {...props} />;
  },
});

MultiViewPlot.install = (app: App) => {
  app.component(MultiViewPlot.name, MultiViewPlot);
};

export default MultiViewPlot;
