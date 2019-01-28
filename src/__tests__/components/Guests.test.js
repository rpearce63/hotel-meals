import React from "react";
import { shallow } from "enzyme";

import Guests from "../../components/Guests";

it("renders without crashing", () => {
  const wrapper = shallow(<Guests />);
  expect(wrapper).toMatchSnapshot();
});
