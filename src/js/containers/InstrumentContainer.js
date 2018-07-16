import React, { Component } from "react";
import Instrument from "../components/Instrument";

class InstrumentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Instrument id="drums" />
        <Instrument id="piano" />
        <Instrument id="ukulele" />
      </div>
    );
  }
}

export default InstrumentContainer;