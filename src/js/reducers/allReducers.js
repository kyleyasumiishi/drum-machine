import { combineReducers } from "redux";
import instrumentReducer from "./instrumentReducer";

const initialState = {
  keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  activeDrumPad: {
    backgroundColor: "blue",
    color: "white"
  },
  inactiveDrumPad: {
    backgroundColor: "transparent",
    color: "black"
  }
};

const keysReducer = (state = initialState.keys, action) => {
  return state;
};

const activeDrumPadReducer = (state = initialState.activeDrumPad, action) => {
  return state;
};

const inactiveDrumPadReducer = (
  state = initialState.inactiveDrumPad,
  action
) => {
  return state;
};

const allReducers = combineReducers({
  instrument: instrumentReducer,
  keys: keysReducer,
  activeDrumPad: activeDrumPadReducer,
  inactiveDrumPad: inactiveDrumPadReducer
});

export default allReducers;
