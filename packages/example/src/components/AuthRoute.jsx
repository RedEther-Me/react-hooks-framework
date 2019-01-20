import React, { useContext } from "react";
import { Route, Redirect } from "react-router";

import { StateContext } from "libraries/state-management";

const AuthRoute = ({ priv, ...props }) => {
  const { state } = useContext(StateContext);
  const { auth } = state;

  if (!auth.authenticated && !auth.user.privs.includes(priv)) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default AuthRoute;
