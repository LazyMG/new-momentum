const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input[type='text']");
const loginButton = loginForm.querySelector("submit");
const title = document.querySelector("#greeting");
const itemContainer = document.querySelector("#item-container");
const loginFormContainer = document.querySelector("#login-form-container");

const HIDEEN_CLASSNAME = "hidden";
const USERNAME = "username";

function paintGreetings(username) {
  itemContainer.classList.remove(HIDEEN_CLASSNAME);
  title.innerText = `Hello! ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginFormContainer.classList.add(HIDEEN_CLASSNAME);
  localStorage.setItem(USERNAME, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  loginFormContainer.classList.remove(HIDEEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
