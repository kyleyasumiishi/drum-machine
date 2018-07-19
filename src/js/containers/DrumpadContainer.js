import React, { Component } from "react";
import Drumpad from "../components/Drumpad";
import { connect } from "react-redux";

class DrumpadContainer extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play(event) {
    const button = document.getElementById(event.target.id);
    const audio = button.firstElementChild;
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  render() {

    const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const drumpads = keys.map(key => {
      return <Drumpad id={this.props.instrument[key].id} text={key} src={this.props.instrument[key].src} play={this.play} />;
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
