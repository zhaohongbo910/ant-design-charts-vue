# @ant-desigin/charts-vue

> A Vue3 chart library, based on [G2Plot](https://g2plot.antv.vision/)


## Install

```
npm install @ant-desigin/charts-vue
```

## Usage

<!-- [![Edit g2plot-vue-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/g2plot-vue-basic-example-uxde9?fontsize=14&hidenavigation=1&theme=dark) -->

### jsx

```tsx
import { defineComponent, ref } from 'vue'
import { LinePlot, LinePlotProps } from '@ant-desigin/charts-vue'

const config: LinePlotProps = {
  height: 350,
  autoFit: true,
  xField: 'year',
  yField: 'value',
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
  ],
}

export default defineComponent(() => {
  const chartRef = ref(null)
  return () => <LineChart {...config} chartRef={chartRef} />
})
```


<!-- 
## DEMO

- Vue 3
  - [github](https://github.com/open-data-plan/g2plot-vue-demo)
  - [online](http://g2plot-vue-demo-opd.vercel.app/)
- Vue 2
  - [github](https://github.com/open-data-plan/g2plot-vue2-demo)
  - [online](http://g2plot-vue2-demo-opd.vercel.app/)

## API -->

<!-- All config defined in `G2Plot` [document](https://g2plot.antv.vision/zh/docs/manual/introduction) can be used as `props` or `attrs`

## Develop

```
npm install
npm run build -->
```
