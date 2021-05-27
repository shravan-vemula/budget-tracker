import React from "react";
import { cleanup } from "@testing-library/react";
import HeaderIcons from "js/_components/molecules/HeaderIcons";

afterEach(cleanup);

describe("HeaderIcon Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HeaderIcons />);
    expect(wrapper).toMatchSnapshot();
  });
});
