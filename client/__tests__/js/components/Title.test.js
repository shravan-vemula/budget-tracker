import React from "react";
import { cleanup } from "@testing-library/react";
import Title from "../../../src/js/_components/atoms/Title";

afterEach(cleanup);

describe("Title Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
  });
});
