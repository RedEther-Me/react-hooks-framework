import { SIDE_EFFECT_PUT } from "./side-effect-types";

export function takeEvery(names, handler) {
  if (Array.isArray(names)) {
    return names.reduce((acc, name) => {
      if (acc[name]) {
        return { ...acc, [name]: [...acc[name], handler] };
      }

      return { ...acc, [name]: [handler] };
    }, {});
  } else {
    return { [names]: [handler] };
  }
}

export function all(handlers) {
  if (Array.isArray(handlers)) {
    return handlers.reduce((outer, item) => {
      return Object.entries(item).reduce((inner, [name, handlers]) => {
        if (inner[name]) {
          return { ...inner, [name]: [...inner[name], ...handlers] };
        }

        return { ...inner, [name]: handlers };
      }, outer);
    }, {});
  }
}

export function put(action) {
  return {
    type: SIDE_EFFECT_PUT,
    action
  };
}
