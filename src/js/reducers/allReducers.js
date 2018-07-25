import { combineReducers } from "redux";
import instrumentReducer from "./instrumentReducer";

const initialState = {
  keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  activeButton: {
    backgroundColor: "#FFE2AF",
    color: "#202020"
  },
  inactiveButton: {
    backgroundColor: "#898989",
    color: "#202020"
  }
};

const keysReducer = (state = initialState.keys, action) => {
  return state;
};

const activeButtonReducer = (state = initialState.activeButton, action) => {
  return state;
};

const inactiveButtonReducer = (state = initialState.inactiveButton, action) => {
  return state;
};

const allReducers = combineReducers({
  instrument: instrumentReducer,
  keys: keysReducer,
  activeButton: activeButtonReducer,
  inactiveButton: inactiveButtonReducer
});

export default allReducers;
