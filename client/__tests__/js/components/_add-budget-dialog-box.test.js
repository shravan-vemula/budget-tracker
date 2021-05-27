import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import AddBudgetDialogBox from "js/_components/organisms/_add-budget-dialog-box";
import "@testing-library/jest-dom";


jest.mock("js/_components/molecules/_select-list", () => ({
  __esModule: true,
  default: () => <span>Select List</span>,
}));

jest.mock("js/services/BudgetService", () => ({
  __esModule: true,
  default: () => <span>Budget Service</span>,
}));

jest.mock("js/services/CategoryService", () => ({
  __esModule: true,
  default: () => <span>Category Service</span>,
}));

var value = {
  budgetId: 1,
};

const budgetComponentList = [
  {
    id: 1,
    currency: 500,
    category: "Rent",
  },
  {
    id: 2,
    currency: 600,
    category: "Rent",
  },
];

const result = [
  {
    id: 1,
    name: "Vacation",
  },
  {
    id: 2,
    name: "Food & Groceries",
  },
  {
    id: 3,
    name: "Rent",
  },
  {
    id: 4,
    name: "Mech Tools",
  },
  {
    id: 5,
    name: "Transport",
  },
  {
    id: 6,
    name: "Shopping",
  },
  {
    id: 7,
    name: "Electricity",
  },
];

const fetch = jest.fn();
global.fetch = fetch;

const fetchData = jest.fn();

afterEach(cleanup);

const handleDialogBoxClose = jest.fn();

describe("Add Budget Dialog Box Component", () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn().mockReturnValue(JSON.stringify(value)),
    },
  });
  it("renders correctly", () => {
    const wrapper = shallow(
      <AddBudgetDialogBox
        open={true}
        handleClose={handleDialogBoxClose}
        budgetComponentList={budgetComponentList}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
