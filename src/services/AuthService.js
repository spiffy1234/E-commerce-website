const AuthService = {
  login(email, password) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  },

  signup(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  },

  isAuthenticated() {
    return localStorage.getItem("isAuthenticated") === "true";
  },
};

export default AuthService;
