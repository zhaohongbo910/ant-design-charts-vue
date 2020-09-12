import { mount } from "@vue/test-utils";
import RoseChart from "../../src/components/rose";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("RoseChart", () => {
  test("should render without crashed", () => {
    mount(() => <RoseChart {...config} />);
  });
});
