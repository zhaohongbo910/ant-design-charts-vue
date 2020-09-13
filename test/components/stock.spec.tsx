import { mount } from "@vue/test-utils";
import StockPlot from "../../src/components/stock";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("StockPlot", () => {
  test("should render without crashed", () => {
    mount(() => <StockPlot {...config} />);
  });
});
