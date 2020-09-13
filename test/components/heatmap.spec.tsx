import { mount } from "@vue/test-utils";
import HeatmapPlot from "../../src/components/heatmap";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("HeatmapPlot", () => {
  test("should render without crashed", () => {
    mount(() => <HeatmapPlot {...config} />);
  });
});
