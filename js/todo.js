const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", (event) => {
    const liDelete = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(liDelete.id));
    saveToDos();
    liDelete.remove();
  });

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
});

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
