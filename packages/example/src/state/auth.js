import { takeEvery, all, put } from "libraries/state-management";
import { pushState } from "libraries/history-management";

import {
  LOGOUT,
  LOGIN_SUBMITTED,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  TOKEN_LOADED
} from "actions/action-types";

import { loginSuccessful, loginError } from "actions/auth";

import api from "api";
import { setAuthToken, clearAuthToken } from "utils";

const initialState = {
  authenticated: false,
  user: {
    privs: []
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL: {
      setAuthToken(action.user.token);
      return {
        ...state,
        authenticated: true,
        user: {
          ...action.user
        }
      };
    }
    case LOGIN_ERROR: {
      clearAuthToken();
      return {
        ...state,
        authenticated: false,
        user: {
          privs: []
        },
        error: action.message
      };
    }
    case LOGOUT: {
      clearAuthToken();
      return {
        ...state,
        authenticated: false,
        user: {
          privs: []
        },
        error: action.message
      };
    }
    default: {
      return state;
    }
  }
}

function* login({ username, password }) {
  const { status, data } = yield api.auth.login({ username, password });

  if (status === 200) {
    yield put(
      loginSuccessful({
        ...data
      })
    );
    pushState("/home");
  } else {
    yield put(
      loginError({
        message: "Username or Password incorrect"
      })
    );
  }
}

function* tokenLogin({ token }) {
  const { status, data } = yield api.auth.tokenLogin({ token });

  if (status === 200) {
    yield put(
      loginSuccessful({
        ...data
      })
    );
  } else {
    yield put(
      loginError({
        message: "Auth-Token incorrect"
      })
    );
  }
}

export function middleware() {
  return all([
    takeEvery(LOGIN_SUBMITTED, login),
    takeEvery(TOKEN_LOADED, tokenLogin)
  ]);
}
