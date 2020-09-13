import { mount } from "@vue/test-utils";
import AreaPlot from "../../src/components/area";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("AreaPlot", () => {
  test("should render without crashed", () => {
    mount(() => <AreaPlot {...config} />);
  });
});
