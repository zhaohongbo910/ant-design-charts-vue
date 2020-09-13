import { mount } from "@vue/test-utils";
import TinyAreaPlot from "../../src/components/tiny-area";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("TinyAreaPlot", () => {
  test("should render without crashed", () => {
    mount(() => <TinyAreaPlot {...config} />);
  });
});
