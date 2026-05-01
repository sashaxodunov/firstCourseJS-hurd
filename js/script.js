const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const toDoData = JSON.parse(localStorage.getItem("todo")) || [];

const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  toDoData.forEach(function (item) {
    const li = document.createElement("li");

    li.classList.add("todo-item");

    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector(".todo-remove").addEventListener("click", function () {
      const index = toDoData.indexOf(item);
      if (index > -1) {
        toDoData.splice(index, 1);
        render();
      }
    });

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
  });

  localStorage.setItem("todo", JSON.stringify(toDoData));
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = headerInput.value.trim();
  if (!value) return;

  const newToDo = {
    text: value,
    completed: false,
  };

  toDoData.push(newToDo);
  headerInput.value = "";

  render();
});

render();
