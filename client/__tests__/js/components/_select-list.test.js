import React from "react";
import { render, fireEvent, cleanup, within } from "@testing-library/react";
import SelectList from "js/_components/molecules/_select-list";

afterEach(() => {
  cleanup();
});

const monthList = ["April", "May", "June"];
const yearList = ["2019", "2020", "2021"];
const setValue = jest.fn();
const setHasError = jest.fn();

describe("Select List Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <SelectList
        optionsList={monthList}
        styleClass="month"
        inputLabel="Month"
        setValue={setValue}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("selects the correct month and displays month cannot be past", () => {
    const { getByRole, getByText } = render(
      <SelectList
        optionsList={monthList}
        styleClass="month"
        inputLabel="Month"
        setValue={setValue}
        setHasError={setHasError}
      />
    );

    fireEvent.mouseDown(getByRole("button"));
    const listbox = within(getByRole("listbox"));
    fireEvent.click(listbox.getByText("April"));

    fireEvent.click(listbox.getByText("June"));
  });
  it("selects the correct year", () => {
    const { getByRole, getAllByRole } = render(
      <SelectList
        optionsList={yearList}
        styleClass="month"
        inputLabel="Year"
        setValue={setValue}
        setHasError={setHasError}
      />
    );
    fireEvent.mouseDown(getByRole("button"));
    const listbox = within(getByRole("listbox"));
    fireEvent.click(listbox.getByText("2020"));
  });
});
