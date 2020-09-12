import { mount } from "@vue/test-utils";
import LineChart from "../../src/components/line";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("LineChart", () => {
  test("should render without crashed", () => {
    mount(() => <LineChart {...config} />);
  });
});
