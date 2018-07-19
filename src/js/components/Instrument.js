import React from "react";

const Instrument = props => {
  return (
    <button id={props.id} className="instrument" onClick={props.selectInstrument}>
      <img src={props.src} />
    </button>
  );
}

export default Instrument;