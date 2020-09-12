import { mount } from "@vue/test-utils";
import HistogramChart from "../../src/components/histogram";

const config = {
  data: [{
    a:1,
    b:1,
  }],
  xField: "a",
  yField: "b",
};

describe("HistogramChart", () => {
  test("should render without crashed", () => {
    mount(() => <HistogramChart {...config} />);
  });
});
