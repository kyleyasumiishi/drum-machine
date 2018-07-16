import { SELECT_INSTRUMENT } from "../../constants";
import { DRUMS, PIANO, UKULELE } from "../../instruments";

export default function(state = "drums", action) {
  switch(action.type) {
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