import React, { Component } from "react";
import Instrument from "../components/Instrument";
import drumsIcon from "../../logos/drums-icon.png";
import pianoIcon from "../../logos/piano-icon.png";
import ukuleleIcon from "../../logos/ukulele-icon.png";
import { connect } from "react-redux";
import { selectInstrument } from "../actions/selectInstrument";

class InstrumentContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // could just change className and have a separate css rule
  handleClick(event) {
    // console.log("event.target:", event.target.tagName);
    const nodeList = document.querySelectorAll(".instrument");
    for (let i = 0; i < nodeList.length; i++) {
      const instrumentButton = nodeList[i];
      instrumentButton.style.backgroundColor = "transparent";
    }

    // if click image, selectedButton is button. If click button, selectedButton is container
    const selectedButton =
      event.target.tagName === "IMG" ? event.target.parentNode : event.target;
    console.log("selectedButton:", selectedButton);
    selectedButton.style.backgroundColor = "blue";
    this.props.selectInstrument(event);
    return;
  }

  render() {
    return (
      <div className="instrument-container">
        <Instrument id="drums" src={drumsIcon} handleClick={this.handleClick} />
        <Instrument id="piano" src={pianoIcon} handleClick={this.handleClick} />
        <Instrument
          id="ukulele"
          src={ukuleleIcon}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instrument: state.instrument
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectInstrument: function(event) {
      dispatch(selectInstrument(event));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstrumentContainer);
