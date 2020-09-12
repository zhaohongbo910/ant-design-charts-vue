import { mount } from "@vue/test-utils";
import TinyColumnChart from "../../src/components/tiny-column";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("TinyColumnChart", () => {
  test("should render without crashed", () => {
    mount(() => <TinyColumnChart {...config} />);
  });
});
