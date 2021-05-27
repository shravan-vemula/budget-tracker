import React from "react";
import { cleanup, render } from "@testing-library/react";
import DeleteAccount from "js/_components/molecules/DeleteAccount";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("DeleteAccount Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DeleteAccount />);
    expect(wrapper).toMatchSnapshot();
  });
  it("check if form displays", () => {
    const { getByTestId } = render(<DeleteAccount />);
    const deleteAccount = getByTestId("deleteAccount");

    expect(deleteAccount).toBeInTheDocument();
  });
  it("delete account check", () => {
    const wrapper = shallow(<DeleteAccount />);
    const img = wrapper.find("#button-click");
    img.simulate("click");
  });

  it("delete account check", () => {
    const wrapper = shallow(<DeleteAccount />);
    const img = wrapper.find("#button-click");
    img.simulate("click");
  });

  it("on close check", () => {
    const wrapper = shallow(<DeleteAccount />);
    const button = wrapper.find("#customized-dialog-title");
    button.simulate("close");
  });
});
