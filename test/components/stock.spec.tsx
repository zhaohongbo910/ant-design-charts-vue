import { mount } from "@vue/test-utils";
import StockChart from "../../src/components/stock";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("StockChart", () => {
  test("should render without crashed", () => {
    mount(() => <StockChart {...config} />);
  });
});
