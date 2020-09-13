import { mount } from "@vue/test-utils";
import BarPlot from "../../src/components/bar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("BarPlot", () => {
  test("should render without crashed", () => {
    mount(() => <BarPlot {...config} />);
  });
});
