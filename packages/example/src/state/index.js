import { takeEvery, all, put } from "libraries/state-management";

import {
  LOGIN_SUBMITTED,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR
} from "actions/action-types";

import { loginSuccessful, loginError } from "actions/auth";

import api from "api";

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESSFUL: {
      return {
        ...state,
        auth: {
          user: {
            id: action.userId
          }
        }
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        auth: {
          error: action.message
        }
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
    console.log(data);
    yield put(
      loginSuccessful({
        ...data
      })
    );
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
