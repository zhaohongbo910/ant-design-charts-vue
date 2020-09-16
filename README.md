# ant-design-charts-vue

> A Vue3 chart library, based on [G2Plot](https://g2plot.antv.vision/)

## Install

```js

npm install ant-design-charts-vue

```

## Props

- config:Object  -- The basic configuration data for the chart

- chartRef:Function -- Gets the current chart instance

## Usage

<!-- [![Edit g2plot-vue-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/g2plot-vue-basic-example-uxde9?fontsize=14&hidenavigation=1&theme=dark) -->

### tsx
[ @vue/babel-plugin-jsx]("https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md")

If you are using JSX syntax in VUE3, please `npm install` 

add `{
    "plugins": ["@vue/babel-plugin-jsx"]
}` to  the  `.babelrc` file


[@vitejs/plugin-vue-jsx]("https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx")

If you are using the vite build tool, please `npm install @vitejs/plugin-vue-jsx` 

```js
// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'
export default {
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ]
}
```

```tsx
// Demo.tsx
import { defineComponent, onMounted, ref } from "vue";
import { LinePlot, LinePlotProps } from "ant-design-charts-vue";

let config: LinePlotProps = {
  data: [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 11 },
  ],
  height: 350,
  autoFit: true,
  xField: "year",
  yField: "value",
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
};
export default defineComponent({
  data() {
    return {
      lineRef: null,
      config:config
    };
  },
  mounted() {
    // Get a chart instance to add event listening
    if (this.lineRef) {
      this.LineRef.on("plot:click", (e: any) => {
        console.log(e);
      });
    }
  },
  render() {
    return (
      <LinePlot config={this.config} chartRef={(ref) => (this.lineRef = ref)} />
    );
  },
});
```

### Vue 模板使用方式



> 非组合式方式使用

```vue
<template>
  <LinePlot :config="lineConfig" :chartRef="(ref) => (LineRef = ref)" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { LinePlot } from "ant-design-charts-vue";
export default defineComponent({
  name: "Demo",
  components: {
    LinePlot,
  },
  data() {
    return {
      LineRef: null,
      lineConfig: {
        data: [
          { year: "1991", value: 3 },
          { year: "1992", value: 4 },
          { year: "1993", value: 3.5 },
          { year: "1994", value: 5 },
          { year: "1995", value: 4.9 },
          { year: "1996", value: 6 },
          { year: "1997", value: 7 },
          { year: "1998", value: 9 },
          { year: "1999", value: 11 },
        ],
        height: 350,
        autoFit: true,
        xField: "year",
        yField: "value",
        smooth: true,
        meta: {
          value: {
            max: 15,
          },
        },
      },
    };
  },
  mounted() {
    // listen event
    if (this.LineRef) {
      this.LineRef.on("plot:click", (e: any) => {
        console.log(e);
      });
    }
  },
});
</script>
```

> 组合式方式
```vue
<template>
  <LinePlot :config="config" :chartRef="onChartRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { LinePlot } from "ant-design-charts-vue";

const config = {
  data: [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 11 },
  ],
  height: 350,
  autoFit: true,
  xField: "year",
  yField: "value",
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
};
export default defineComponent({
  name: "Demo",
  components: {
    LinePlot,
  },
  setup() {
  
    let refDom: any;
    function onChartRef(ref: any) {
      refDom = ref;
    }
    
    onMounted(() => {
      // Get a chart instance to add event listening
      refDom.on("plot:click", (e: any) => {
        console.log(e);
      });
    });

    return {
      onChartRef,
      config
    };
  },
});
</script>
```



