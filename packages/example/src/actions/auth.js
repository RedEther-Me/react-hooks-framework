import {
  LOGIN_SUBMITTED,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  TOKEN_LOADED,
  LOGOUT
} from "./action-types";

export function loginSubmitted({ username, password }) {
  return {
    type: LOGIN_SUBMITTED,
    username,
    password
  };
}

export function loginSuccessful({ userId, privs, token, ...rest }) {
  return {
    type: LOGIN_SUCCESSFUL,
    user: {
      userId,
      token,
      privs,
      ...rest
    }
  };
}

export function loginError({ message }) {
  return {
    type: LOGIN_ERROR,
    message
  };
}

export function tokenLoaded({ token }) {
  return {
    type: TOKEN_LOADED,
    token
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
