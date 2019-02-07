import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import SignUpForm from "./SignUpForm.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("test signup form", () => {
  let wrapper;
  it("test if form mounts", () => {
    wrapper = shallow(<SignUpForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
