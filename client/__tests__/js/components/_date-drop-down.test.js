import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import DateDropDown from "js/_components/organisms/_date-dropdown";
afterEach(cleanup);

const setSelectedDate = jest.fn();
describe("DateDropDown Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DateDropDown setSelectedDate={setSelectedDate} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display menu after clicking", () => {
    const { getByRole, getByText } = render(
      <DateDropDown setSelectedDate={setSelectedDate} />
    );
    expect(getByRole("button")).toBe;
    fireEvent.click(getByRole("button"));
    expect(getByText("June,2020")).toBe;
    fireEvent.click(getByText("June,2020"));
  });
});
