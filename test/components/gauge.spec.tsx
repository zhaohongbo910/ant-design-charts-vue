import { mount } from "@vue/test-utils";
import GaugeChart from "../../src/components/gauge";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("GaugeChart", () => {
  test("should render without crashed", () => {
    mount(() => <GaugeChart {...config} />);
  });
});
