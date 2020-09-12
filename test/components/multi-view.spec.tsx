import { mount } from "@vue/test-utils";
import MultiViewChart from "../../src/components/multi-view";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("MultiViewChart", () => {
  test("should render without crashed", () => {
    mount(() => <MultiViewChart {...config} />);
  });
});
