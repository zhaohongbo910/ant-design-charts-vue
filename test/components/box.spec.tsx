import { mount } from "@vue/test-utils";
import BoxPlot from "../../src/components/box";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("BoxPlot", () => {
  test("should render without crashed", () => {
    mount(() => <BoxPlot {...config} />);
  });
});
