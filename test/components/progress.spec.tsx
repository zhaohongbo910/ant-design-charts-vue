import { mount } from "@vue/test-utils";
import ProgressChart from "../../src/components/progress";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("ProgressChart", () => {
  test("should render without crashed", () => {
    mount(() => <ProgressChart {...config} />);
  });
});
