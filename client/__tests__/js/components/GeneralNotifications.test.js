import React from "react";
import { cleanup } from "@testing-library/react";
import GeneralNotifications from "js/_components/molecules/GeneralNotifications";
import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";

afterEach(cleanup);

describe("GeneralNotifications Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<GeneralNotifications />);
    expect(wrapper).toMatchSnapshot();
  });

  // it("check if general notifications  displays", () => {
  //   const set_new_bill = jest.fn();
  //   const set_notify_exceeded_expense = jest.fn();
  //   const set_money_transaction = jest.fn();
  //   const set_exceeding_goal_period = jest.fn();
  //   const set_reach_goal = jest.fn();
  //   const set_recurring_due_expenses = jest.fn();
  //   const set_manage_uncategorized = jest.fn();
  //   const set_email = jest.fn();
  //   const set_text_messages = jest.fn();
  //   const { result, waitForNextUpdate } = renderHook(() =>
  //     GeneralNotifications({
  //       setNewBill: set_new_bill,
  //       setNotifyExceededExpense: set_notify_exceeded_expense,
  //       setMoneyTransaction: set_money_transaction,
  //       setExceedingGoalPeriod: set_exceeding_goal_period,
  //       setReachGoal: set_reach_goal,
  //       setRecurringDueExpenses: set_recurring_due_expenses,
  //       setManageUncategorized: set_manage_uncategorized,
  //       setEmail: set_email,
  //       setTextMessages: set_text_messages,
  //     })
  //   );
  // });
});
