import { mount } from "@vue/test-utils";
import RadarChart from "../../src/components/radar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("RadarChart", () => {
  test("should render without crashed", () => {
    mount(() => <RadarChart {...config} />);
  });
});
