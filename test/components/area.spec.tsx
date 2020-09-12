import { mount } from "@vue/test-utils";
import AreaChart from "../../src/components/area";

const config = {
  data: [{
    a:1,
    b:1,
  }],
  xField: "a",
  yField: "b",
};

describe("AreaChart", () => {
  test("should render without crashed", () => {
    mount(() => <AreaChart {...config} />);
  });
});
