import { mount } from "@vue/test-utils";
import HeatmapChart from "../../src/components/heatmap";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("HeatmapChart", () => {
  test("should render without crashed", () => {
    mount(() => <HeatmapChart {...config} />);
  });
});
