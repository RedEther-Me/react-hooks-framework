export function login(username, password) {
  if (username === "super") {
    if (password === "pass") {
      return {
        userId: 1
      };
    }
  }

  if (username === "super2") {
    if (password === "pass") {
      return {
        userId: 2
      };
    }
  }
}
