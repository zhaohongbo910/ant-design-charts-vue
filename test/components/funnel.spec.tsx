import { mount } from "@vue/test-utils";
import FunnelPlot from "../../src/components/funnel";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("FunnelPlot", () => {
  test("should render without crashed", () => {
    mount(() => <FunnelPlot {...config} />);
  });
});
