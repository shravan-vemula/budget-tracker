import React from "react";
import { cleanup, render } from "@testing-library/react";
import EditTextFields from "js/_components/molecules/EditTextFields";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("EditTextFields Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<EditTextFields />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
