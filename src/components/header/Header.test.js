import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return shallow(<Header />);
};

test("renders without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});


test("renders `image` passed as a prop", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "header-avatar");
  expect(component.length).toBe(1);
});

test("Avatar have `title` prop", () => {
  const wrapper = setup();
  wrapper.setProps({ title: 'ashish mangla' });
  console.log(wrapper.debug());
});
test("set a test image for `image` prop", () => {
  const wrapper = setup();
  wrapper.setProps({ image: testImg });
  console.log(wrapper.debug());
});