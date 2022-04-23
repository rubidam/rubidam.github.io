const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

const TODO_KEY = "todos";

function loadToDos() {
  const jsonToDo = localStorage.getItem(TODO_KEY);
  if (jsonToDo === null) {
    return [];
  } else {
    return JSON.parse(jsonToDo);
  }
}

let toDos = loadToDos();

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function handleDeleteButton(event) {
  const li = event.target.parentElement;
  const id = parseInt(li.id);
  toDos = toDos.filter((item) => item.id !== id);
  li.remove();
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.classList.add("underline");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", handleDeleteButton);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: value,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

toDos.forEach(paintToDo);
