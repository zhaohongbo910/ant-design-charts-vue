import { mount } from "@vue/test-utils";
import TinyLineChart from "../../src/components/tiny-line";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("TinyLineChart", () => {
  test("should render without crashed", () => {
    mount(() => <TinyLineChart {...config} />);
  });
});
