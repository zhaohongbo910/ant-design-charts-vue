import { mount } from "@vue/test-utils";
import SunburstChart from "../../src/components/sunburst";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("SunburstChart", () => {
  test("should render without crashed", () => {
    mount(() => <SunburstChart {...config} />);
  });
});
