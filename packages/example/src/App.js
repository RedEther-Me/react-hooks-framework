import React, { Component, Fragment } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import { createHistory } from "libraries/history-management";
import { StateProvider } from "libraries/state-management";

import { reducer, middleware } from "./state";

import AuthRoute from "components/AuthRoute";

import Navbar from "views/Navbar";

import Login from "views/Login";
import Home from "views/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <StateProvider reducer={reducer} middleware={middleware}>
          <Router history={createHistory()}>
            <Fragment>
              <header>
                <Navbar />
              </header>
              <div className="container is-fluid">
                <Switch>
                  <Route path="/login" component={Login} />
                  <AuthRoute path="/home" priv="user" component={Home} />
                  <Redirect to="/login" />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </StateProvider>
      </Fragment>
    );
  }
}

export default App;
