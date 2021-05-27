import React from "react";
import { render, cleanup } from "@testing-library/react";
import BudgetMetricsCard from "js/_components/organisms/_budget-metrics-card";

afterEach(cleanup);

describe("Budget Metrics Card Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<BudgetMetricsCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have all the icons", () => {
    const { getAllByRole } = render(
      <BudgetMetricsCard heading="Budget" value="80,000" />
    );
    expect(getAllByRole("img")).toBe;
  });
  it("should have heading and value", () => {
    const { getByText } = render(
      <BudgetMetricsCard heading="Budget" value="80,000" />
    );
    expect(getByText("Budget")).toBe;
    expect(getByText("80,000")).toBe;
  });
});
