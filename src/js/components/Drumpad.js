import React from "react";

const Drumpad = props => {
  return (
    <button id={props.id} className="drum-pad" onClick={props.play}>
      {props.text}
      <audio className="clip" id={props.text} src={props.src} />
    </button>
  );
}

export default Drumpad;