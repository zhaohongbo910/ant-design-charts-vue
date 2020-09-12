import { mount } from "@vue/test-utils";
import ColumnChart from "../../src/components/column";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("ColumnChart", () => {
  test("should render without crashed", () => {
    mount(() => <ColumnChart {...config} />);
  });
});
