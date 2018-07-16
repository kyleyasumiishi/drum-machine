import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Instrument from "../js/components/Instruments";

configure({ adapter: new Adapter() });

describe("Instrument component", () => {
  // it("is a button", () => {
  //   const wrapper = shallow(<Instrument />);
  //   expect(wrapper.type()).toEqual("button");
  // });
});