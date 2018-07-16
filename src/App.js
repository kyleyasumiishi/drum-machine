import React, { Component } from 'react';
import './css/App.css';
import DisplayContainer from "./js/containers/DisplayContainer";
import DrumpadContainer from "./js/containers/DrumpadContainer";
import InstrumentContainer from "./js/containers/InstrumentContainer";
import Instrument from './js/components/Instrument';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        Hello drum machine
        <DisplayContainer />
        <DrumpadContainer />
        <InstrumentContainer />
      </div>
    ); 
  }
}

export default App;
