import { mount } from "@vue/test-utils";
import BulletPlot from "../../src/components/bullet";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("BulletPlot", () => {
  test("should render without crashed", () => {
    mount(() => <BulletPlot {...config} />);
  });
});
