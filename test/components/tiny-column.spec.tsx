import { mount } from "@vue/test-utils";
import TinyColumnPlot from "../../src/components/tiny-column";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("TinyColumnPlot", () => {
  test("should render without crashed", () => {
    mount(() => <TinyColumnPlot {...config} />);
  });
});
