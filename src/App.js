import React, { Component } from "react";
import "./css/App.css";
import Display from "./js/components/Display";
import DrumpadContainer from "./js/containers/DrumpadContainer";
import InstrumentContainer from "./js/containers/InstrumentContainer";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: "Ready to Rock!"
    };
    this.play = this.play.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.updateStyles = this.updateStyles.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    const key = event.key.toUpperCase();
    if (this.props.keys.indexOf(key) > -1) {
      const button = document.getElementById(key).parentNode;
      button.click();
    }
  }

  updateStyles(element, styles) {
    Object.keys(styles).forEach(property => {
      element.style[property] = styles[property];
    });
  }

  handleOnClick(event) {
    const button = document.getElementById(event.target.id);
    const audio = button.firstElementChild;
    this.setState({
      displayMessage: this.props.instrument[audio.id].display
    });
    this.updateStyles(button, this.props.activeButton);
    setTimeout(() => {
      this.updateStyles(button, this.props.inactiveButton);
    }, 100);
    this.play(audio);
  }

  play(audio) {
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div id="drum-machine">
        <Display displayMessage={this.state.displayMessage} />
        <DrumpadContainer click={this.handleOnClick} />
        <InstrumentContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instrument: state.instrument,
    activeButton: state.activeButton,
    inactiveButton: state.inactiveButton,
    keys: state.keys
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
