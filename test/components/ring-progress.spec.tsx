import { mount } from "@vue/test-utils";
import RingProgressChart from "../../src/components/ring-progress";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("RingProgressChart", () => {
  test("should render without crashed", () => {
    mount(() => <RingProgressChart {...config} />);
  });
});
