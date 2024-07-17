const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletTodo(item) {
    const li = item.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
} 

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "✖️";
    delBtn.addEventListener("click", deletTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
} 

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
} 

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) {
    const parsedToDos = JSON.parse(savedTodo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
} 