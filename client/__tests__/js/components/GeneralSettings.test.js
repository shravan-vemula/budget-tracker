import React from "react";
import { cleanup } from "@testing-library/react";
import GeneralSettings from "js/_components/molecules/GeneralSettings";
import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";

afterEach(cleanup);

describe("GeneralNotifications Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<GeneralSettings />);
    expect(wrapper).toMatchSnapshot();
  });

})