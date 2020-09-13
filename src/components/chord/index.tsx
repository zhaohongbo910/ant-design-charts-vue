import { defineComponent, App } from "vue";
import { Chord, ChordOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type ChordPlotProps = Writeable<
  Omit<G2PlotChartProps<ChordOptions>, "chart"> & ChordOptions
>;

const ChordPlot = defineComponent<ChordPlotProps>({
  name: "ChordPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Chord} {...ctx.attrs} {...props} />;
  },
});

ChordPlot.install = (app: App) => {
  app.component(ChordPlot.name, ChordPlot);
};

export default ChordPlot;
