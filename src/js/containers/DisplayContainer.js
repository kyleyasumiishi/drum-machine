import React, { Component } from "react";
import Display from "../components/Display";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Display text="DisplayContainer: Replace with display message from store" />
    );
  }
}

export default DisplayContainer;