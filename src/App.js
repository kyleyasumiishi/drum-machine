import React, { Component } from 'react';
import './css/App.css';
import DisplayContainer from "./js/containers/DisplayContainer";
import DrumpadContainer from "./js/containers/DrumpadContainer";

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        Hello drum machine
        <DisplayContainer />
        <DrumpadContainer />
      </div>
    ); 
  }
}

export default App;
