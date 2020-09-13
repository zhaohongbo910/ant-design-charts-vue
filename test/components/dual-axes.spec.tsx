import { mount } from "@vue/test-utils";
import DualAxesPlot from "../../src/components/dual-axes";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("DualAxesPlot", () => {
  test("should render without crashed", () => {
    mount(() => <DualAxesPlot {...config} />);
  });
});
