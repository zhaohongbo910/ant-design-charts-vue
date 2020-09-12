import { mount } from "@vue/test-utils";
import LiquidChart from "../../src/components/liquid";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("LiquidChart", () => {
  test("should render without crashed", () => {
    mount(() => <LiquidChart {...config} />);
  });
});
