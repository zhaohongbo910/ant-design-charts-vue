import { mount } from "@vue/test-utils";
import PiePlot from "../../src/components/pie";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("PiePlot", () => {
  test("should render without crashed", () => {
    mount(() => <PiePlot {...config} />);
  });
});
