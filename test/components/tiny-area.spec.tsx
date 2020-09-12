import { mount } from "@vue/test-utils";
import TinyAreaChart from "../../src/components/tiny-area";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("TinyAreaChart", () => {
  test("should render without crashed", () => {
    mount(() => <TinyAreaChart {...config} />);
  });
});
