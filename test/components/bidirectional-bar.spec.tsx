import { mount } from "@vue/test-utils";
import BidirectionalBarPlot from "../../src/components/bidirectional-bar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("BidirectionalBarPlot", () => {
  test("should render without crashed", () => {
    mount(() => <BidirectionalBarPlot {...config} />);
  });
});
