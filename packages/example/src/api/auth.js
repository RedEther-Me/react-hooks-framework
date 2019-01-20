export async function login({ username, password }) {
  if (username === "super") {
    if (password === "pass") {
      return {
        status: 200,
        data: {
          userId: 1,
          privs: ["user", "super"]
        }
      };
    }
  }

  if (username === "user") {
    if (password === "pass") {
      return {
        status: 200,
        data: {
          userId: 2,
          privs: ["user"]
        }
      };
    }
  }

  return {
    status: 400
  };
}
