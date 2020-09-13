import { mount } from "@vue/test-utils";
import TreemapPlot from "../../src/components/treemap";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("TreemapPlot", () => {
  test("should render without crashed", () => {
    mount(() => <TreemapPlot {...config} />);
  });
});
