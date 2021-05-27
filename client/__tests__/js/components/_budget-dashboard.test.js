import React from "react";
import { cleanup, render } from "@testing-library/react";
import BudgetDashboard from "js/_components/templates/_budget-dashboard";

var value = {
  budgetId: 1,
};

jest.mock("js/_components/organisms/_budget-metrics-card", () => ({
  __esModule: true,
  default: () => <span>Budget Metrics Card</span>,
}));

jest.mock("js/_components/organisms/_add-budget-dialog-box", () => ({
  __esModule: true,
  default: () => <span>Add Budget Dialog Box</span>,
}));

jest.mock("js/_components/molecules/_add-budget-card", () => ({
  __esModule: true,
  default: () => <span>Add Budget Card</span>,
}));

jest.mock("js/services/BudgetService", () => ({
  __esModule: true,
  default: () => <span>Budget Service</span>,
}));

const fetch = jest.fn();
const getBudgets = jest.fn();
global.fetch = fetch;
afterEach(cleanup);

describe("Budget Dashboard Page", () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn().mockReturnValue(JSON.stringify(value)),
    },
  });
  it("renders correctly", () => {
    const wrapper = shallow(<BudgetDashboard />);
    expect(wrapper).toMatchSnapshot();
  });



});
