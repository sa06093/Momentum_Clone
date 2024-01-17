const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

// toDos array의 내용을 localStorage에 넣는 함수
function saveToDos(){
    // JSON.stringify는 localStorage에 list를 못넣어서 list를 string형태로 넣음
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// ToDo를 지워주는 함수
function deleteToDo(event){
    //여기서 event.target.parentElement가 li임
    const li = event.target.parentElement;
    li.remove();
    // 우리가 클릭한 li.id와 다른 toDo는 남겨두기
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}


// ToDo를 추가해주는 함수
function paintToDo(newTodo) {
    // toDoList에다 li, span을 만들어줌
    const li = document.createElement("li");
    li.id = newTodo.id; // 각 li의 고유 id 만들어줌(지울 때 쉽도록)
    const span = document.createElement("span");
    span.innerText = newTodo.text; //newTodo가 Obect로 들어오기 때문에, .text 해줘야함

    // button 만들어주기
    const button = document.createElement("button");
    button.innerText ="x";
    button.addEventListener("click", deleteToDo);

    // append는 맨 마지막에 와야함
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //event 발생했을 때 새로고침 되는것 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//여기서부턴 localStorage에 있는 toDoList 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //공백이었던 toDos를 기존값들을 가진채로 저장해줘야함
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}