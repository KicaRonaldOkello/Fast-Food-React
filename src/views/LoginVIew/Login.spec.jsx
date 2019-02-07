import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "./Login.jsx";

Enzyme.configure({ adapter: new Adapter() });

let loginProps = {
  login: jest.fn(),
  returnData: {}
};

describe("test signup component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login {...loginProps} />);
  });
  it("Signup component", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("test handleSubmit function", () => {
    const instance = wrapper.instance();
    wrapper.setState({ tagList: ["one two three four"] });
    expect(
      instance.handleSubmit({
        target: { name: "draft" },
        published: false,
        preventDefault: jest.fn
      })
    );
  });
  it("test handleChange function", () => {
    wrapper
      .instance()
      .handleChange({ target: { name: "email", value: "okello@andela.com" } });
    expect(wrapper.state("email")).toEqual("okello@andela.com");
  });
  it("test toggle function", () => {
    wrapper.setState({ isOpen: false });
    wrapper.instance().toggleCollapse();
    expect(wrapper.state("isOpen")).toEqual(true);
  });
  it("test component will receive props ", () => {
    wrapper.setProps({ returnData: { Error: "invalid" } });
    expect(wrapper.state("errors")).toBe("invalid");
  });
  it("test component will receive props ", () => {
    wrapper.setProps({ returnData: { access_token: "invalid" } });
    expect(window.localStorage.getItem("token")).toBe("invalid");
  });
});
