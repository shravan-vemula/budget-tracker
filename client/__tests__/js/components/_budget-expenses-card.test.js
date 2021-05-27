import React from "react";
import { render, cleanup } from "@testing-library/react";
import BudgetExpensesCard from "js/_components/organisms/_budget-expenses-card";

afterEach(cleanup);

describe("Budget Metrics Card Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<BudgetExpensesCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have all the icons", () => {
    const { getAllByRole } = render(
      <BudgetExpensesCard
        category="Food"
        budget="5000"
        spent="0"
        remaining="5000"
      />
    );
    expect(getAllByRole("img")).toBe;
  });
  it("should have heading and value", () => {
    const { getByText, getAllByText } = render(
      <BudgetExpensesCard
        category="Food"
        budget="5000"
        spent="0"
        remaining="5000"
      />
    );
    expect(getByText("Food")).toBe;
    expect(getAllByText("₹ 5000")).toBe;
    expect(getByText("₹ 0")).toBe;
  });
});
