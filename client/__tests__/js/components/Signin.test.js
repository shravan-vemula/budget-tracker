import React from "react";
import { cleanup } from "@testing-library/react";
import SignIn from "js/_components/organisms/Signin";


afterEach(cleanup);

describe("Title Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
