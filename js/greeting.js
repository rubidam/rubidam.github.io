const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const showUserName = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  showUserName.classList.remove(HIDDEN_CLASSNAME);
  showUserName.innerText = `Hello, ${username}!`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName !== null) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(savedUserName);
}
