const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const remove = document.querySelector("#remove_btn");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    remove.classList.remove(HIDDEN_CLASSNAME);
}; 

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { 
    // show the greetings
    paintGreetings();
}

// 이 방법은 localStorage를 2번 열어봄
// 대신 greeting 인자를 안받음 (유저 정보)

function removeStorage () {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}
remove.addEventListener("click", removeStorage);