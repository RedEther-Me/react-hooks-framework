export function getAuthToken() {
  return localStorage.getItem("auth-token");
}

export function setAuthToken(token) {
  localStorage.setItem("auth-token", token);
}

export function clearAuthToken() {
  localStorage.removeItem("auth-token");
}
