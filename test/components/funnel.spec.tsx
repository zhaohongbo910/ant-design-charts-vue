import { mount } from "@vue/test-utils";
import FunnelChart from "../../src/components/funnel";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("FunnelChart", () => {
  test("should render without crashed", () => {
    mount(() => <FunnelChart {...config} />);
  });
});
