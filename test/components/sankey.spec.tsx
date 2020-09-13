import { mount } from "@vue/test-utils";
import SankeyPlot from "../../src/components/sankey";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("SankeyPlot", () => {
  test("should render without crashed", () => {
    mount(() => <SankeyPlot {...config} />);
  });
});
