import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import LoginForm from "./LoginForm.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("test signup form", () => {
  let wrapper;
  it("test if form mounts", () => {
    wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
