import React, { useReducer } from "react";

import { SIDE_EFFECT_PUT } from "./side-effect-types";

import StateContext from "./StateContext";

async function invokeHandlers(dispatch, handler, action) {
  const sequence = handler(action);

  let done = false;
  let input;
  while (!done) {
    const temp = sequence.next(input);

    done = temp.done;

    if (!done) {
      input = await temp.value;

      switch (input.type) {
        case SIDE_EFFECT_PUT: {
          dispatch(input.action);

          input = undefined;
          break;
        }
        default: {
          break;
        }
      }
    }
  }
}

const StateProvider = ({ reducer, middleware, children }) => {
  const middlewareHandler = middleware();

  const [state, dispatch] = useReducer(reducer, {});

  const context = {
    state,
    dispatch: action => {
      if (middlewareHandler[action.type]) {
        middlewareHandler[action.type].forEach(handler =>
          invokeHandlers(dispatch, handler, action)
        );
      }

      dispatch(action);
    }
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
