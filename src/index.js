import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import allReducers from "./js/reducers/allReducers";
import instrumentReducer from "./js/reducers/instrumentReducer";

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

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
