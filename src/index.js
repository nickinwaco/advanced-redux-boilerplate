import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";
import store from "./store.js";
import {Provider} from "react-redux";

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}
render();
