import { mount } from "@vue/test-utils";
import TreemapChart from "../../src/components/treemap";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("TreemapChart", () => {
  test("should render without crashed", () => {
    mount(() => <TreemapChart {...config} />);
  });
});
