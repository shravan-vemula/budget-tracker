import React from "react";
import { cleanup, render } from "@testing-library/react";
import ProfileSettingsTab from "js/_components/organisms/ProfileSettingsTab";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

afterEach(cleanup);
jest.mock("axios");

describe("ProfileSettingsTab Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProfileSettingsTab />);
    expect(wrapper).toMatchSnapshot();
  });

  // it("check if form displays", () => {
  //   axios.get.mockResolvedValue({
  //     data: {
  //       email: "Raju@gmail.com",
  //       phone: "9999999999",
  //       country: "india",
  //     },
  //   });
  //   const { getByTestId } = render(<ProfileSettingsTab />);
  //   const profilebar = getByTestId("profilebar");

  //   expect(profilebar).toBeInTheDocument();
  // });
});
