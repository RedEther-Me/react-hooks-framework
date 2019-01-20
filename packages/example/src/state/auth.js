import { takeEvery, all, put } from "libraries/state-management";
import { pushState } from "libraries/history-management";

import {
  LOGOUT,
  LOGIN_SUBMITTED,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR
} from "actions/action-types";

import { loginSuccessful, loginError } from "actions/auth";

import api from "api";

const initialState = {
  authenticated: false,
  user: {
    privs: []
  }
};

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESSFUL: {
      return {
        ...state,
        authenticated: true,
        user: {
          id: action.userId,
          privs: action.privs
        }
      };
    }
    case LOGIN_ERROR: {
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

export function middleware() {
  return all([takeEvery(LOGIN_SUBMITTED, login)]);
}
