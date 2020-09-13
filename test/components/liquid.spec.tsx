import { mount } from "@vue/test-utils";
import LiquidPlot from "../../src/components/liquid";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("LiquidPlot", () => {
  test("should render without crashed", () => {
    mount(() => <LiquidPlot {...config} />);
  });
});
