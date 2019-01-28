import React from "react";
import { shallow } from "enzyme";

import Meals from "../../components/Meals";

it("renders without crashing", () => {
  const wrapper = shallow(<Meals />);
  expect(wrapper).toMatchSnapshot();
});

it("displays a list of menus", () => {
  const props = {
    guestMeals: [
      {
        name: "Rick",
        dates: ["2019-02-01", "2019-02-02"]
      }
    ]
  };
  const wrapper = shallow(<Meals {...props} />);
  expect(wrapper.find(".meals-list__item").length).toEqual(6);
});
