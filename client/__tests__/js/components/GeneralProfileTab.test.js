import React from "react";
import { cleanup } from "@testing-library/react";
import GeneralProfileTab from "js/_components/organisms/GeneralProfileTab";

afterEach(cleanup);

describe("GeneralProfileTab Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<GeneralProfileTab />);
    expect(wrapper).toMatchSnapshot();
  });
});
