import { mount } from "@vue/test-utils";
import ChordChart from "../../src/components/chord";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("ChordChart", () => {
  test("should render without crashed", () => {
    mount(() => <ChordChart {...config} />);
  });
});
