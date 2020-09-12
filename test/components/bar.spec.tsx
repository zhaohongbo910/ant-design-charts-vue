import { mount } from "@vue/test-utils";
import BarChart from "../../src/components/bar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("BarChart", () => {
  test("should render without crashed", () => {
    mount(() => <BarChart {...config} />);
  });
});
