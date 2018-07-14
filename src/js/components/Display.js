import React from "react";

const Display = props => {
  return (
    <div id="display">
      <div id="text">{props.text}</div>
    </div>
  );
}

export default Display;