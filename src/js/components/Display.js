import React from "react";

const Display = props => {
  return (
    <div id="display">
      <div id="text">{props.displayMessage}</div>
    </div>
  );
};

export default Display;
