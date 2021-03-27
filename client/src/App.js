import React from "react";
import { connect } from "react-redux";
import { NavBar } from "./cmps/NavBar.jsx";
import { Create } from './pages/Create';
import { Wall } from './pages/Wall';
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

function _App() {
  return (
    <div className="App">


      <NavBar />
      <Switch>
        <Route exact component={Wall} path={"/"} />
        <Route exact component={Create} path={"/create"} />
      </Switch>

    </div>
  );
}

export const App = connect(null, null)(withRouter(_App));