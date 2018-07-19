import { SELECT_INSTRUMENT } from "../../constants";

export const selectInstrument = event => {
  return {
    type: SELECT_INSTRUMENT,
    payload: event.target.parentNode.id
  };
};