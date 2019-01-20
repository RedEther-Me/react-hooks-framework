import { all, createReducer } from "libraries/state-management";

import { reducer as authReducer, middleware as authMiddleware } from "./auth";

const config = {
  auth: authReducer
};

export const reducer = createReducer(config);

export function middleware() {
  return all([authMiddleware()]);
}
