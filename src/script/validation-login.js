// validation:
const userNameEl = document.querySelector(".user-name");
const passwordEl = document.querySelector(".password");
const loginForm = document.querySelector(".login-form");
const messageEl = document.querySelector(".message");
const iconLoginEl = document.querySelector(".icon-log");
const messageTextEl = document.querySelector(".message__text");
const passw = /^[A-Za-z]\w{7,14}$/;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userNameEl.value || !passwordEl.value) {
    messageEl.classList.remove("hidden");
    messageTextEl.textContent = "Username and Password are required !";
    passwordEl.value = "";
  } else if (userNameEl.value.length < 5 || passwordEl.value.length < 7) {
    messageEl.classList.remove("hidden");
    messageTextEl.textContent =
      "Username should be minimum 5 character and Password should be between 7 and 14 characters which contain only characters, numeric digits, underscore and first character must be a letter !";
    passwordEl.value = "";
  } else if (passwordEl.value.match(passw)) {
    messageEl.textContent =
      "Password should be between 7 and 16 characters which contain only characters, numeric digits, underscore and first character must be a letter !";
  } else {
    console.log("pas");
    messageEl.classList.remove("hidden");
    messageEl.classList.remove("border-rose-600");
    messageEl.classList.add("border-green-800");
    iconLoginEl.classList.add("hidden");
    messageTextEl.textContent = `Welcome Back ${userNameEl.value} *** You are redirected  to the home page :)`;
    setTimeout(() => {
      document.location.href = "index.html";
    }, 1000);
  }
  //   console.log(passwordEl.value);
});
function removeMessage() {
  messageEl.classList.add("hidden");
}
userNameEl.addEventListener("input", removeMessage);
passwordEl.addEventListener("input", removeMessage);
