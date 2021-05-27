import React from "react";
import { cleanup } from "@testing-library/react";
import SettingsPage from "js/_components/organisms/SettingsPage";

afterEach(cleanup);

describe("SettingsPage Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SettingsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
