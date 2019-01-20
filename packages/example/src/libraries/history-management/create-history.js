import createBrowserHistory from "history/createBrowserHistory";

let history = undefined;

export function createHistory() {
  if (!history) {
    history = createBrowserHistory();
  }

  return history;
}
