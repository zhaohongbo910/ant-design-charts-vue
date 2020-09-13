import { mount } from "@vue/test-utils";
import RadarPlot from "../../src/components/radar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("RadarPlot", () => {
  test("should render without crashed", () => {
    mount(() => <RadarPlot {...config} />);
  });
});
