import React, { Component } from 'react';
import './css/App.css';
import DisplayContainer from "./js/containers/DisplayContainer";
import DrumpadContainer from "./js/containers/DrumpadContainer";
import InstrumentContainer from "./js/containers/InstrumentContainer";
import Instrument from './js/components/Instrument';

const KEYS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class App extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }
  
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    const key = event.key.toUpperCase();
    if (KEYS.indexOf(key) > -1) {
      const button = document.getElementById(key).parentNode;
      button.click();
    }
  }
  
  changeBackgroundColor(element) {
    element.style.backgroundColor = "blue";
    setTimeout(() => {
      element.style.backgroundColor = "transparent"
    }, 100);
  }

  handleOnClick(event) {
    const button = document.getElementById(event.target.id);
    this.changeBackgroundColor(button);
    const audio = button.firstElementChild;
    this.play(audio);
  }

  play(audio) {
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  
  render() {
    return (
      <div id="drum-machine">
        <DisplayContainer />
        <DrumpadContainer click={this.handleOnClick} />
        <InstrumentContainer />
      </div>
    ); 
  }
}

export default App;
