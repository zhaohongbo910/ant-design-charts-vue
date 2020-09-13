import { defineComponent, App } from "vue";
import { Radar, RadarOptions } from "@antv/g2plot";
import G2PlotChart, { G2PlotChartProps } from "../../Base";
import { Writeable } from "../../types";

export type RadarPlotProps = Writeable<
  Omit<G2PlotChartProps<RadarOptions>, "chart"> & RadarOptions
>;

const RadarPlot = defineComponent<RadarPlotProps>({
  name: "RadarPlot",
  setup(props, ctx) {
    return () => <G2PlotChart chart={Radar} {...ctx.attrs} {...props} />;
  },
});

RadarPlot.install = (app: App) => {
  app.component(RadarPlot.name, RadarPlot);
};

export default RadarPlot;
