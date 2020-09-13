import { mount } from "@vue/test-utils";
import WordCloudPlot from "../../src/components/word-cloud";

const config = {
  data: [],
  xField: "a",
  yField: "b",
};
describe("WordCloudPlot", () => {
  test("should render without crashed", () => {
    mount(() => <WordCloudPlot {...config} />);
  });
});
