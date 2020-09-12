import { mount } from "@vue/test-utils";
import BidirectionalBarChart from "../../src/components/bidirectional-bar";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("BidirectionalBarChart", () => {
  test("should render without crashed", () => {
    mount(() => <BidirectionalBarChart {...config} />);
  });
});
