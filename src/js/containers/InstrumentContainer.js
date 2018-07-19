import React, { Component } from "react";
import Instrument from "../components/Instrument";
import drumsIcon from "../../logos/drums-icon.png";
import pianoIcon from "../../logos/piano-icon.png";
import ukuleleIcon from "../../logos/ukulele-icon.png";
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import { selectInstrument } from "../actions/selectInstrument";

class InstrumentContainer extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click(e) {
    console.log(e.target.parentNode);
  }

  render() {
    return (
      <div className="instrument-container">
        <Instrument id="drums" src={drumsIcon} selectInstrument={this.props.selectInstrument} click={this.props.selectInstrument} />
        <Instrument id="piano" src={pianoIcon} selectInstrument={this.props.selectInstrument} click={this.click} />
        <Instrument id="ukulele" src={ukuleleIcon} selectInstrument={this.props.selectInstrument} click={this.click} />
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     selectInstrument: selectInstrument
//   }, dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentContainer);


