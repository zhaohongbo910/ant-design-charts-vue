import { mount } from "@vue/test-utils";
import WaterfallChart from "../../src/components/waterfall";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("WaterfallChart", () => {
  test("should render without crashed", () => {
    mount(() => <WaterfallChart {...config} />);
  });
});
