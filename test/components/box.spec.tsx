import { mount } from "@vue/test-utils";
import BoxChart from "../../src/components/box";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("BoxChart", () => {
  test("should render without crashed", () => {
    mount(() => <BoxChart {...config} />);
  });
});
