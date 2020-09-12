import { mount } from "@vue/test-utils";
import DualAxesChart from "../../src/components/dual-axes";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("DualAxesChart", () => {
  test("should render without crashed", () => {
    mount(() => <DualAxesChart {...config} />);
  });
});
