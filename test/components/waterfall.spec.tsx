import { mount } from "@vue/test-utils";
import WaterfallPlot from "../../src/components/waterfall";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("WaterfallPlot", () => {
  test("should render without crashed", () => {
    mount(() => <WaterfallPlot {...config} />);
  });
});
