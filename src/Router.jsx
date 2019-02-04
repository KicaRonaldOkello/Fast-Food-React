import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";

const Routes = () => (
  <Router>
    <Provider store={store} />
    <Switch />
  </Router>
);
export default Routes;
