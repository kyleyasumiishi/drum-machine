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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    const nodeList = document.querySelectorAll(".instrument");
    for (let i = 0; i < nodeList.length; i++) {
      const instrumentButton = nodeList[i];
      instrumentButton.style.backgroundColor = this.props.inactiveButton.backgroundColor;
    }
    const selectedButton =
      event.target.tagName === "IMG" ? event.target.parentNode : event.target;
    selectedButton.style.backgroundColor = this.props.activeButton.backgroundColor;
    this.props.selectInstrument(event);
    return;
  }

  render() {
    return (
      <div className="instrument-container">
        <Instrument id="drums" src={drumsIcon} click={this.handleOnClick} />
        <Instrument id="piano" src={pianoIcon} click={this.handleOnClick} />
        <Instrument id="ukulele" src={ukuleleIcon} click={this.handleOnClick} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instrument: state.instrument,
    activeButton: state.activeButton,
    inactiveButton: state.inactiveButton
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
