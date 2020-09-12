import { mount } from "@vue/test-utils";
import PieChart from "../../src/components/pie";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("PieChart", () => {
  test("should render without crashed", () => {
    mount(() => <PieChart {...config} />);
  });
});
