import React from "react";

const Drumpad = props => {
  return (
    <button id={props.id} className="drum-pad">
      {props.text}
      <audio className="clip" id={props.text} />
    </button>
  );
}

export default Drumpad;