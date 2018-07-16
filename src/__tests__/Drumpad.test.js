import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Drumpad from "../js/components/Drumpad";

configure({ adapter: new Adapter() });

describe("Drumpad component", () => {
  it("is a button", () => {
    const wrapper = shallow(<Drumpad />);
    expect(wrapper.type()).toEqual("button");
  });
  it("has a className='drum-pad'", () => {
    const wrapper = shallow(<Drumpad />);
    expect(wrapper.hasClass("drum-pad")).toBeTruthy();
  });
  it("has an id equal to props.id", () => {
    const wrapper = shallow(<Drumpad id="snare" />);
    expect(wrapper.find("#snare").exists()).toBeTruthy();
  });
  it("has an inner text equal to props.text", () => {
    const wrapper = shallow(<Drumpad text="P" />);
    console.log(wrapper.text());
    expect(wrapper.text()).toEqual("P");
  });
  it("has an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C", () => {
    const regex = /^[QWEASDZXC]{1}$/;
    let wrapper = shallow(<Drumpad text="R" />);
    expect(wrapper.text()).not.toMatch(regex);
    wrapper = shallow(<Drumpad text="Qe" />);
    expect(wrapper.text()).not.toMatch(regex);
    wrapper = shallow(<Drumpad text="q" />);
    expect(wrapper.text()).not.toMatch(regex);
    wrapper = shallow(<Drumpad text="Q" />);
    expect(wrapper.text()).toMatch(regex);
  });
  it("contains an HTML5 audio element", () => {
    const wrapper = shallow(<Drumpad />);
    expect(wrapper.find("audio").exists()).toBeTruthy();
  });
  it("contains an HTML5 audio element with a className='clip'", () => {
    const wrapper = shallow(<Drumpad />);
    expect(wrapper.find("audio").hasClass("clip")).toBeTruthy();
  });
  it("contains an HTML5 audio element with an id equal to the inner text of its parent", () => {
    const wrapper = shallow(<Drumpad text="Q" />);
    expect(wrapper.find("audio").find("#Q").exists()).toBeTruthy();
  });
});