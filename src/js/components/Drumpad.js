import React from "react";

const Drumpad = props => {
  return (
    <button id={props.id} className="drum-pad">{props.text}</button>
  );
}

export default Drumpad;