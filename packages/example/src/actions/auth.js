import { LOGIN_SUBMITTED, LOGIN_SUCCESSFUL, LOGIN_ERROR } from "./action-types";

export function loginSubmitted({ username, password }) {
  return {
    type: LOGIN_SUBMITTED,
    username,
    password
  };
}

export function loginSuccessful({ userId, privs }) {
  return {
    type: LOGIN_SUCCESSFUL,
    userId,
    privs
  };
}

export function loginError({ message }) {
  return {
    type: LOGIN_ERROR,
    message
  };
}
