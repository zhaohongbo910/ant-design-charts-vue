import { mount } from "@vue/test-utils";
import GaugePlot from "../../src/components/gauge";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("GaugePlot", () => {
  test("should render without crashed", () => {
    mount(() => <GaugePlot {...config} />);
  });
});
