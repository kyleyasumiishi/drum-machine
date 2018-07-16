import React, { Component } from "react";
import Instrument from "../components/Instrument";
import drumsIcon from "../../logos/drums-icon.png";
import pianoIcon from "../../logos/piano-icon.png";
import ukuleleIcon from "../../logos/ukulele-icon.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectInstrument } from "../actions/selectInstrument";

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentContainer);


