import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { StateContext } from "libraries/state-management";

import { reducer } from "./state";

import Navbar from "views/Navbar";

import Login from "views/Login";
import Home from "views/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StateContext.Provider value={reducer}>
          <header>
            <Navbar />
          </header>
          <Router>
            <div className="container is-fluid">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Redirect to="/login" />
              </Switch>
            </div>
          </Router>
        </StateContext.Provider>
      </Fragment>
    );
  }
}

export default App;
