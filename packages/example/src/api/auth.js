const SUPER_TOKEN = "super";
const USER_TOKEN = "user";

const user = {
  userId: 1,
  username: "user",
  name: "Regular User",
  token: USER_TOKEN,
  privs: ["user"]
};

const superUser = {
  userId: 2,
  username: "user",
  name: "Regular User",
  token: SUPER_TOKEN,
  privs: ["user", "super"]
};

export async function login({ username, password }) {
  if (username === "super") {
    if (password === "pass") {
      return {
        status: 200,
        data: superUser
      };
    }
  }

  if (username === "user") {
    if (password === "pass") {
      return {
        status: 200,
        data: user
      };
    }
  }

  return {
    status: 400
  };
}

export async function tokenLogin({ token }) {
  const found = [user, superUser].find(u => u.token === token);

  if (found) {
    return {
      status: 200,
      data: found
    };
  }

  return { status: 400 };
}
