const submitLogin = () => {
  window.location.href = "/home.html";
};
const submitSignup = () => {
  window.location.href = "home.html";
};

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const login = document.getElementById("login");
const signup = document.getElementById("signup");

loginBtn.addEventListener("click", () => {
  login.classList.remove("hidden");
  signup.classList.add("hidden");
});
signupBtn.addEventListener("click", () => {
  login.classList.add("hidden");
  signup.classList.remove("hidden");
});
