import React, { Component } from 'react';
import './css/App.css';
import DisplayContainer from "./js/containers/DisplayContainer";

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        Hello drum machine
        <DisplayContainer />
      </div>
    ); 
  }
}

export default App;
