import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import SettingsSideBar from "js/_components/organisms/SettingsSideBar";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("SettingsSideBar Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SettingsSideBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it("check if form displays", () => {
    const { getByTestId } = render(<SettingsSideBar />);
    const sidebar = getByTestId("sidebar");

    expect(sidebar).toBeInTheDocument();
  });

  it("on change Test", () => {
    const { getByTestId } = render(<SettingsSideBar />);
    const tab = getByTestId("settingTab");
    fireEvent.change(tab, { event: "", newValue: 1 });
  });
});
