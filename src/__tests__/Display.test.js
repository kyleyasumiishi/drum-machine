import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../js/components/Display";

configure({ adapter: new Adapter() });

describe("Display component", () => {
  it("has an id='display'", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("#display").exists()).toBeTruthy();
  });
  it("displays props.text within 'text' element", () => {
    const wrapper = shallow(<Display text="Snare" />);
    const text = wrapper.find("#text");
    expect(text.text()).toEqual("Snare");
    // console.log(text);
    // expect(text).toHaveTextContent("Snare");
  });
})