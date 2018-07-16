import React, { Component } from "react";
import Drumpad from "../components/Drumpad";

class DrumpadContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="drumpad-container">
        {/* TODO: change id's to describe the audio clip triggered based on instrument selection via props */}
        <Drumpad id="heater-1" text="Q" />
        <Drumpad id="heater-2" text="W" />
        <Drumpad id="heater-3" text="E" />
        <Drumpad id="heater-4" text="A" />
        <Drumpad id="clap" text="S" />
        <Drumpad id="open-hh" text="D" />
        <Drumpad id="kick-hat" text="Z" />
        <Drumpad id="kick" text="X" />
        <Drumpad id="closed-hh" text="C" />
      </div>
    );
  }
}

export default DrumpadContainer;