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

  handleClick(event) {
    const nodeList = document.querySelectorAll(".instrument");
    for (let i = 0; i < nodeList.length; i++) {
      const instrumentButton = nodeList[i];
      instrumentButton.style.backgroundColor = "transparent";
    }
    const selectedButton = event.target.parentNode;
    console.log(selectedButton);
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
