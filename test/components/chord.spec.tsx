import { mount } from "@vue/test-utils";
import ChordPlot from "../../src/components/chord";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("ChordPlot", () => {
  test("should render without crashed", () => {
    mount(() => <ChordPlot {...config} />);
  });
});
