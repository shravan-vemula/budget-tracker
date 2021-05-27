import React from "react";
import { cleanup } from "@testing-library/react";
import SettingsHeader from "js/_components/organisms/SettingsHeader";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";

afterEach(cleanup);

describe("SettingsHeader Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SettingsHeader />);
    expect(wrapper).toMatchSnapshot();
  });
  it("on click check", () => {
    const wrapper = shallow(<SettingsHeader />);
    const img = wrapper.find("#img-click");
    img.simulate("click");
  });
});

describe("HomePageHeader renders correctly", () => {
  test("renders form layout", () => {
    render(
      <Router>
        <SettingsHeader />
      </Router>
    );
    expect(screen.getByRole("img")).toBe;
    screen.debug();
  });
  it("settings header snap shot", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <SettingsHeader />{" "}
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
