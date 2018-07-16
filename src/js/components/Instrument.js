import React from "react";

const Instrument = props => {
  return (
    <button id={props.id} className="instrument">
      <img src={props.src} />
    </button>
  );
}

export default Instrument;