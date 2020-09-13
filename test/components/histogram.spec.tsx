import { mount } from "@vue/test-utils";
import HistogramPlot from "../../src/components/histogram";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("HistogramPlot", () => {
  test("should render without crashed", () => {
    mount(() => <HistogramPlot {...config} />);
  });
});
