import { mount } from "@vue/test-utils";
import SankeyChart from "../../src/components/sankey";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("SankeyChart", () => {
  test("should render without crashed", () => {
    mount(() => <SankeyChart {...config} />);
  });
});
