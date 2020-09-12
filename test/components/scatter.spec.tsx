import { mount } from "@vue/test-utils";
import ScatterChart from "../../src/components/scatter";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("ScatterChart", () => {
  test("should render without crashed", () => {
    mount(() => <ScatterChart {...config} />);
  });
});
