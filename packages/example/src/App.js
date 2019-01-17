import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { StateProvider } from "libraries/state-management";

import { reducer, middleware } from "./state";

import Navbar from "views/Navbar";

import Login from "views/Login";
import Home from "views/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StateProvider reducer={reducer} middleware={middleware}>
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
        </StateProvider>
      </Fragment>
    );
  }
}

export default App;
