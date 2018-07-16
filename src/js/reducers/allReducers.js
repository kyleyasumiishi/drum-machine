import { combineReducers } from "redux";
import instrumentReducer from "./instrumentReducer";

const allReducers = combineReducers({
  instrument: instrumentReducer
});

export default allReducers;