const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 떄 사용
const USERNAME_KEY = "username"; //실수를 만들고 싶지않은 string이라는 사실을 기억하고 상기시키기 좋음

function onLoginSubmit(event) {
  //5. JS는 함수를 호춣하면서 argument를 주는데 이 argument에는 event에 관한 정보들이 들어있음.
  event.preventDefault(); //6. 이 정보에는 브라우저 event에 대한 기본 동작을 못하도록 막는 정보도 함께 있음, 여기서 실행
  loginForm.classList.add(HIDDEN_CLASSNAME); //7. 다시 form을 숨김(HIDDEN_CLASSNAME 더해줌)
  const username = loginInput.value; //8.input의 값을 가져옴, input의 value를 username이라는 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); //9. 유저 이름 기억(저장될 key이름, username변수) lcoal storage에 USERNAME_KEY와 함께 저장
  paintGreetings(username); //10. paingGreetings함수 호출, input value를 argument로 넣어줌
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //11. input 값을 받은 paintGreeting 함수는 h1에 text 적어줌.
  greeting.classList.remove(HIDDEN_CLASSNAME); //12. paintGreetings 함수는 h1으로부터 hidden을 제거해서 h1을 화면에 띄어줌
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //username같으면 오타낼 수 있으므로 변수 만들어줌.

//2. JS가 USERNAME_KEY가지고 local storage를 확인, 앱을 처음 실행했을때 key와 value가 없음.
if (savedUsername === null) {
  //3. key와 value가 없을때
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form에서 HIDDEN_CLASSNAME을 지움, form이 표시됨
  loginForm.addEventListener("submit", onLoginSubmit); //4.addEventListner가 form이 submit되기를 기다리고 있고, submit이 발생하면 onLOginSubmit 함수를 호출(우리가 호출x ,JS가 호출)
} else {
  paintGreetings(savedUsername); //13. 새로고침하면 위 값이 false이므로 이게 실행, paingGreetings 함수가 local storage로부터 유저 정보를 받아옴.
}
