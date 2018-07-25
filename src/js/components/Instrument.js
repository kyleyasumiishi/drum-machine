import React from "react";

const Instrument = props => {
  return (
    <button id={props.id} className="instrument" onClick={props.click}>
      <img src={props.src} alt={props.id + " logo"} />
    </button>
  );
};

export default Instrument;
