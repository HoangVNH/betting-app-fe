import React from "react";
import ReactDOM from "react-dom";
import CssBaseLine from "@mui/material/CssBaseline";
import "./assets/scss/index.scss";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseLine />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
