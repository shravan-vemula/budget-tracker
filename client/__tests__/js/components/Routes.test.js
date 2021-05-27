import React from "react";
import Routes from "routes";

it("renders without crashing", () => {
  const wrapper = shallow(<Routes />);
  expect(wrapper).toMatchSnapshot();
});
