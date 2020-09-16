import { defineComponent,HTMLAttributes } from "vue";
import { Plot as G2PlotChart } from "@antv/g2plot";

interface Options {
  [x: string]: any;
}

export interface Plot<C extends Options> extends G2PlotChart<C> {
  new (container: HTMLElement, config: C): G2PlotChart<C>;
}

type PickedAttrs = "class" | "style";

export interface G2PlotProps<C extends Options>
  extends Pick<HTMLAttributes, PickedAttrs> {
  chart: any;
  chartRef?: Function;
}

export interface G2PlotRawBindings<C extends Options> {
  plot: G2PlotChart<C>;
  config: C;
}

const G2Plot = defineComponent<G2PlotProps<any>, G2PlotRawBindings<any>>({
  inheritAttrs: false,
  name: "G2Plot",
  mounted() {
    const { chart: Chart, config, chartRef } = this.$attrs as {
      chart: Plot<Options>;
      config:Object,
      chartRef:Function
    };
    const _to = Object.prototype.toString;

    if (_to.call(config) !== _to.call({})) {
      throw new TypeError("Config requires an Object");
    }

    if (typeof chartRef !== "function") {
      throw new TypeError("chartRef requires an Function");
    }
    this.plot = new Chart(this.$el, config);
    chartRef.apply(null, [this.plot]);
    this.plot.render();
  },

  beforeUnmount() {
    if (this.plot) {
      this.plot.destroy();
    }
  },
  render() {
    return <div />;
  },
});

export default G2Plot;
