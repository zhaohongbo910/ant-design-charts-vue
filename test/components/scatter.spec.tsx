import { mount } from "@vue/test-utils";
import ScatterPlot from "../../src/components/scatter";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("ScatterPlot", () => {
  test("should render without crashed", () => {
    mount(() => <ScatterPlot {...config} />);
  });
});
