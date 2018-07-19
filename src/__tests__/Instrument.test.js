import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Instrument from "../js/components/Instrument";

configure({ adapter: new Adapter() });

describe("Instrument component", () => {
  it("is a button", () => {
    const wrapper = shallow(<Instrument />);
    expect(wrapper.type()).toEqual("button");
  });
  it("has a className='instrument'", () => {
    const wrapper = shallow(<Instrument />);
    expect(wrapper.hasClass("instrument")).toBeTruthy();
  });
  it("has an id equal to props.id", () => {
    const wrapper = shallow(<Instrument id="drum" />);
    expect(wrapper.find("#drum").exists()).toBeTruthy();
  });
  it("contains an img element", () => {
    const wrapper = shallow(<Instrument />);
    expect(wrapper.find("img").exists()).toBeTruthy();
  });
  it("has an onClick method", () => {
    // when click on icon, it will update state
    const selectInstrument = jest.fn();
    const wrapper = shallow(<Instrument selectInstrument={selectInstrument}/>);
    wrapper.simulate("click");
    expect(selectInstrument).toHaveBeenCalledTimes(1);
  });
});