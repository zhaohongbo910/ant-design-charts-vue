import { defineComponent, App } from "vue";
import { Chord, ChordOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";

import { Writeable } from "../../types";

export type ChordChartProps = Writeable<
  Omit<G2PlotChartProps<ChordOptions>, "chart"> & ChordOptions
>;

const ChordChart = defineComponent<ChordChartProps>({
  name: "ChordChart",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Chord} {...ctx.attrs} {...props} />;
  },
});

ChordChart.install = (app: App) => {
  app.component(ChordChart.name, ChordChart);
};

export default ChordChart;
