import { mount } from "@vue/test-utils";
import RingProgressPlot from "../../src/components/ring-progress";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("RingProgressPlot", () => {
  test("should render without crashed", () => {
    mount(() => <RingProgressPlot {...config} />);
  });
});
