import React from "react";
import { cleanup } from "@testing-library/react";
import HomePageHeader from "js/_components/organisms/HomePageHeader";

afterEach(cleanup);

describe("HomePageHeader Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomePageHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
