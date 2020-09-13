import { defineComponent, Ref, HTMLAttributes } from "vue";
import { Plot as G2Plot } from "@antv/g2plot";
import isEqual from "lodash/isEqual";
import cloneDeep from "lodash/cloneDeep";

interface Options {
  [x: string]: any;
}

export interface Plot<C extends Options> extends G2Plot<C> {
  new (container: HTMLElement, config: C): G2Plot<C>;
}

type PickedAttrs = "class" | "style";

export interface G2PlotChartProps<C extends Options>
  extends Pick<HTMLAttributes, PickedAttrs> {
  chart: any;
  chartRef?: Ref<G2Plot<C> | null>;
}

interface ChartOptions {
  data: any[];
  config: any;
}

export interface G2PlotRawBindings<C extends Options> {
  plot: G2Plot<C>;
  config: C;
  data: any[];
  getChartConfig: () => ChartOptions;
}

const G2PlotChart = defineComponent<
  G2PlotChartProps<any>,
  G2PlotRawBindings<any>
>({
  inheritAttrs: false,
  name: "G2PlotChart",
  mounted() {
    const { chart: Chart } = this.$attrs as {
      chart: Plot<Options>;
    };
    const { data, config } = this.getChartConfig();
    this.config = cloneDeep(config);
    const normalizedData = data || [];
    this.data = normalizedData;
    this.plot = new Chart(this.$el, {
      data: normalizedData,
      ...config,
    });
    this.plot.render();
  },
  foreUpdate() {
    const { data, config } = this.getChartConfig();
    const normalizedData = data || [];
    /* istanbul ignore else */
    if (this.plot) {
      if (!isEqual(config, this.config) || !this.data.length) {
        this.config = cloneDeep(config);
        this.plot.update({
          data: normalizedData,
          ...config,
        });
        this.plot.render();
      } else {
        this.plot.changeData(normalizedData);
      }
      this.data = normalizedData;
    }
  },
  foreUnmount() {
    /* istanbul ignore else */
    if (this.plot) {
      this.plot.destroy();
    }
  },
  methods: {
    getChartConfig(): ChartOptions {
      const { chart, chartRef, ...restProps } = this.$attrs as Record<
        string,
        any
      >;
      const { data, ...config } = restProps;
      return { data, config };
    },
  },
  render() {
    return <div />;
  },
});

export default G2PlotChart;
