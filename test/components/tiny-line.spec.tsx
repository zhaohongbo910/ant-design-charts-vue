import { mount } from "@vue/test-utils";
import TinyLinePlot from "../../src/components/tiny-line";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("TinyLinePlot", () => {
  test("should render without crashed", () => {
    mount(() => <TinyLinePlot {...config} />);
  });
});
