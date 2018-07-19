import { SELECT_INSTRUMENT } from "../../constants";
import { DRUMS, PIANO, UKULELE } from "../../instruments";

export default function(state = DRUMS, action) {
  console.log(action);
  switch(action.payload) {
    case "drums":
      return DRUMS;
    case "piano":
      return PIANO;
    case "ukulele":
      return UKULELE;
    default:
      return state;
  }
}