import { mount } from "@vue/test-utils";
import LinePlot from "../../src/components/line";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("LinePlot", () => {
  test("should render without crashed", () => {
    mount(() => <LinePlot {...config} />);
  });
});
