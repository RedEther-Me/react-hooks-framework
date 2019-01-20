import React, { Fragment, useContext, useState, useEffect } from "react";

import { StateContext } from "libraries/state-management";

import { tokenLoaded } from "actions/auth";

import { getAuthToken } from "utils";

const AuthContainer = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { state, dispatch } = useContext(StateContext);
  const { auth } = state;
  const token = getAuthToken();

  useEffect(
    () => {
      if (!auth.authenticated) {
        if (token) {
          dispatch(tokenLoaded({ token }));
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    },
    [auth.authenticated, token]
  );

  if (loading) {
    return <Fragment />;
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthContainer;
