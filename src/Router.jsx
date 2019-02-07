import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import SignUp from "./views/SignUp/SignUp.jsx";

const Routes = () => (
  <Router>
    <Provider store={store}>
      <ToastContainer />
      <Switch>
        <Route path="/" component={SignUp} />
      </Switch>
    </Provider>
  </Router>
);
export default Routes;
