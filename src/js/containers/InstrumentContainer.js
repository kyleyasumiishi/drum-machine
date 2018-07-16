import React, { Component } from "react";
import Instrument from "../components/Instrument";
import drumsIcon from "../../logos/drums-icon.png";
import pianoIcon from "../../logos/piano-icon.png";
import ukuleleIcon from "../../logos/ukulele-icon.png";

class InstrumentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="instrument-container">
        <Instrument id="drums" src={drumsIcon} />
        <Instrument id="piano" src={pianoIcon} />
        <Instrument id="ukulele" src={ukuleleIcon} />
      </div>
    );
  }
}

export default InstrumentContainer;