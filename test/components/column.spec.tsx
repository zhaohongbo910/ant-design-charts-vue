import { mount } from "@vue/test-utils";
import ColumnPlot from "../../src/components/column";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("ColumnPlot", () => {
  test("should render without crashed", () => {
    mount(() => <ColumnPlot {...config} />);
  });
});
