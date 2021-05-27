import React from "react";
import { cleanup, render } from "@testing-library/react";
import ChangePassword from "js/_components/molecules/ChangePassword";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("ChangePassword Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ChangePassword />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show correct text", () => {
    const wrapper = shallow(<ChangePassword />);
    expect(wrapper.text().includes("Password")).toBe(true);
  });

  it("check if form displays", () => {
    const { getByTestId } = render(<ChangePassword />);
    const changePassword = getByTestId("changePassword");

    expect(changePassword).toBeInTheDocument();
  });

  it("on click check", () => {
    const wrapper = shallow(<ChangePassword />);
    const button = wrapper.find("#button-click");
    button.simulate("click");
  });

  it("on close check", () => {
    const wrapper = shallow(<ChangePassword />);
    const button = wrapper.find("#customized-dialog-title");
    button.simulate("close");
  });

  it("must click on cancel button", () => {
    const wrapper = shallow(<ChangePassword />);
    const button = wrapper.find("#cancel-click");
    button.simulate("click");
  });
});
