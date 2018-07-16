import React, { Component } from "react";
import Display from "../components/Display";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="display-container">
        <Display text="This is the display" />
      </div>
    );
  }
}

export default DisplayContainer;