import { defineComponent, App } from "vue";
import { Pie, PieOptions } from "@antv/g2plot";
import VG2Plot, { G2PlotProps } from "../../Base";
import { Writeable } from "../../types";

export type PiePlotProps = Writeable<
  Omit<G2PlotProps<PieOptions>, "chart"> & PieOptions
>;

const PiePlot = defineComponent<PiePlotProps>({
  name: "PiePlot",
  setup(props, ctx) {
    return () => <VG2Plot chart={Pie} {...ctx.attrs} {...props} />;
  },
});

PiePlot.install = (app: App) => {
  app.component(PiePlot.name, PiePlot);
};

export default PiePlot;
