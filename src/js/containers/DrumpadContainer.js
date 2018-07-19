import React, { Component } from "react";
import Drumpad from "../components/Drumpad";
import { connect } from "react-redux";

const KEYS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class DrumpadContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const drumpads = KEYS.map(key => {
      return <Drumpad id={this.props.instrument[key].id} text={key} src={this.props.instrument[key].src} click={this.props.click} keydown={this.props.keydown} />;
    });

    return (
      <div className="drumpad-container">
        {drumpads}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instrument: state.instrument
  }
}

export default connect(mapStateToProps, null)(DrumpadContainer);
