import { mount } from "@vue/test-utils";
import MultiViewPlot from "../../src/components/multi-view";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("MultiViewPlot", () => {
  test("should render without crashed", () => {
    mount(() => <MultiViewPlot {...config} />);
  });
});
