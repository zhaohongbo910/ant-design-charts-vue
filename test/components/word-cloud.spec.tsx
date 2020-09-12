import { mount } from "@vue/test-utils";
import WordCloudChart from "../../src/components/word-cloud";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};

describe("WordCloudChart", () => {
  test("should render without crashed", () => {
    mount(() => <WordCloudChart {...config} />);
  });
});
