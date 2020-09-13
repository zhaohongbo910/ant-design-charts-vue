import { mount } from "@vue/test-utils";
import ProgressPlot from "../../src/components/progress";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("ProgressPlot", () => {
  test("should render without crashed", () => {
    mount(() => <ProgressPlot {...config} />);
  });
});
