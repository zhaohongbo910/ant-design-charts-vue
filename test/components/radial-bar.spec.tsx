import { mount } from "@vue/test-utils";
import RadialBarPlot from "../../src/components/radial-bar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("RadialBarPlot", () => {
  test("should render without crashed", () => {
    mount(() => <RadialBarPlot {...config} />);
  });
});
