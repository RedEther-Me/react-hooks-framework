import { createHistory } from "./create-history";

export function pushState(options) {
  createHistory().push(options);
}
