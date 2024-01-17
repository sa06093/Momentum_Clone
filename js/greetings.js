// Login-form 전체 태그 가져옴
const loginForm = document.querySelector("#login-form");

// Login-form의 input 부분 가져옴
const loginInput = document.querySelector("#login-form input");

// Login 완료시 나타나는 greeting 가져옴
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// Greeting 나타나게 해주는 함수
function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    // Greeting에서 class="hidden" 제거해줘서 greeting 화면에 나타나게 해줌
}

// 
function onLoginSubmit(event) {
    event.preventDefault(); //폼의 기본 동작을 막고 내가 원하는 동작을 수행하기 위해
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);   // Localstorage에 key = "username", value = username으로 저장해줌 
    loginForm.classList.add(HIDDEN_CLASSNAME);  //  class="hidden"을 만들어줘서 loginform을 숨겨줌
    paintGreetings(username);   //Greeting 나타나게 해줌
}


// 여기부턴 데이터를 LocalStorage에 저장해주는 코드
// 이미 username을 입력해서 localStorage에 보관되어있다면, Greeting 해주기
const USERNAME_KEY ="username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 만약 Localstorage에 아무것도 저장이 안되어있다면, class="hidden"을 지워서 loginform이 나타나게 해줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    // form이 submit 되었을 때 onLoginSubmit을 동작시킴
} else {
    // show the greetings
    paintGreetings(savedUsername);  //만약 Localstorage에 이미 값이 저장되어 있다면, paintGreeting으로 greeting 해줌
}