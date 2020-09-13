import { mount } from "@vue/test-utils";
import RosePlot from "../../src/components/rose";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("RosePlot", () => {
  test("should render without crashed", () => {
    mount(() => <RosePlot {...config} />);
  });
});
