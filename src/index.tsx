import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
