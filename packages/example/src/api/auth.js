export async function login({ username, password }) {
  if (username === "super") {
    if (password === "pass") {
      return {
        status: 200,
        data: {
          userId: 1
        }
      };
    }
  }

  if (username === "super2") {
    if (password === "pass") {
      return {
        status: 200,
        data: {
          userId: 2
        }
      };
    }
  }

  return {
    status: 400
  };
}
