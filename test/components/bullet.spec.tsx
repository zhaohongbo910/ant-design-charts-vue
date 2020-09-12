import { mount } from "@vue/test-utils";
import BulletChart from "../../src/components/bullet";

const config = {
  data: [{
    title: '满意度',
    ranges: [100],
    measures: [80],
    target: 85,
  }],
  xField: "title",
};

describe("BulletChart", () => {
  test("should render without crashed", () => {
    mount(() => <BulletChart {...config} />);
  });
});
