import { mount } from "@vue/test-utils";
import SunburstPlot from "../../src/components/sunburst";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("SunburstPlot", () => {
  test("should render without crashed", () => {
    mount(() => <SunburstPlot {...config} />);
  });
});
