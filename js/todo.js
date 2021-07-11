//브라우저에 ToDo 저장, toDo 불러오고싶음(새로고침하면 localStorage에서 불러와서 화면에 그려주고 싶음)
//html에 id가 todo-form, todo-list인 element JS로 가져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //이미 todo-form을 찾아 놨으므로 그중에서 input을 찾음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//새로 추가한 것들만 localStorage에 저장되고, 예전 것은 없어짐.(덮어씌워짐) -> application이 시작될때 toDos array는 항상 비어있기 때문
//newTodo들만 toDos array에 추가해서 단지 newTodo들만 localStoarage에 저장하고 있음 -> 우리가 갖고 있던 toDos의 이전 복사본을 잊어버리고 있음.
//업데이트 가능하도록 let으로 만들고,
let toDos = []; //array만듬.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos array를 localStorage에 집어 넣는 것, 문제:기존에 있던 toDo들을 화면에 나타내주지 않음.
  //JSON.stringfy() -> JS object나 array나 어떤 것이든 string으로 바꿔주는 기능, localStoarge에 array모양으로 저장되었음, 중복도 가능["a","b","c","a"]
}

function deleteToDo(event) {
  //click에 관한 event도 가지고 있음.
  const li = event.target.parentElement; //>li(클릭된 element의 부모)
  li.remove(); //제거
  //클릭했던 li의 id를 갖고 있는 toDo를 지우고 싶음, toDo의 id가 li의 id와 다른 걸 남기고 싶음, 이 함수는 DB에 있는 모든 것과 함께 실행됨
  // li.id는 string타입, toDo.id는 number타입이어서 두개가 달라 아무것도 지워지지 않음, li.id string을 number로 바꿔줌
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); //toDos DB에서 toDo를 지운 뒤에 saveToDos를 한번 더 불러야됨.
}

/* <li>
<span>df</span> 
<button>toDo를 삭제하는 button을 만들것</button> 
</li> */
function paintToDo(newTodo) {
  const li = document.createElement("li"); //JS로 HTML에 li태그 만듬
  li.id = newTodo.id;
  const span = document.createElement("span"); // JS로 HTML에 span태그 만듬
  span.innerText = newTodo.text; //span안에 text넣어줌(사용자가 form에서 우리에게 준 newTodo값), newTodo는 이제obj를 받으므로, obj의 text
  const button = document.createElement("button"); //toDo를 삭제하는 button추가, button은 click event를 기다림. 누군가가 뭔가를 클릭했을 떄 알 수 있는 유잃한 방법
  button.innerText = "❌"; //button에 ❌추가
  button.addEventListener("click", deleteToDo); //button클릭하면 event발생, 모든 button이 같은 event를 기다리고 있고, 모든 같은 function을 실행하고 있음
  li.appendChild(span); //li는 span자식 갖게됨.
  li.appendChild(button); //li에 button추가
  toDoList.appendChild(li); //새로운 li들을 ul(todo-list)에 추가
}

//form은 submit event(새로고침)를 가지므로 fuction을 만들어 이 이벤트 기본동작을 막음.
function handleToDoSubmit(event) {
  //JS가 방금 발생한 event를 handleToDoSubmit함수의 첫번쨰 인자로 줌
  event.preventDefault(); //기본 event동작 막음
  const newTodo = toDoInput.value; //input의 value를 얻고싶음, input value를 비우기 전에 이 값을 저장해줌(input의 현재 value를 새로운 변수에 복사), 그 다음에 무엇을 하든 newToDo변수와는 아무 상관 없음.
  toDoInput.value = ""; //input안에 text 입력후 eneter 누르면 입력한 것을 비우고 싶음, toDoInput.value를 비웠다고 해서 newToDo가 비워지는 것은 아님

  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //id로 각각의 li item을 구별하고 싶음,   //Date.now()는 밀리초를 주는 함수, 우리에게 랜덤한 숫자를 줄 것
  };
  toDos.push(newTodoObj); //newToDo(text)를 array에 push(toDos는 array), localStorage에 array로는 저장할 수 없음, text 말고 object로 저장함.
  paintToDo(newTodoObj); //화면에 toDo그려줌, //paintToDo에 text를 주는게 아니라 newTodoObj를 추가
  saveToDos(); //toDo들을 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit); //1. 사용자가 form을 submit하면

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //JSON.parase("[1,2,3,4]") //> (4) [1,2,3,4] string이 JS가 이해할 수 있는 array됨
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //localStoarge에 toDo들이 들어 있으면, toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원, arry에 추가되고 덮어씌우지 않음.
  parsedToDos.forEach(paintToDo); //array의 각 item에 대해 하나의 function을 실행할 수 있음
  //paintToDo는 newToDoObj를 받는데 JS는 그 obj를 paintToDo에게 전달해줌 ex)paintToDo({text:"a", id:12121})
}
