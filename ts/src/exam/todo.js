"use strict";
// todo 배열
let todos = [];
let currentFilter = "all";
// dom 요소 가져오기
// form, input, todo-list, todo-count, filter button
const form = document.querySelector("form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoCount = document.querySelector("#todo-count");
const clearCompleted = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll(".filter button");
// 저장된 todos 가져오기
const savedTodos = localStorage.getItem("todos");
if (savedTodos) {
  todos = JSON.parse(savedTodos);
}
// todos를 localStorage 저장
// localStorage.setItem("todos", JSON.stringify(todos))
// localStorage.getItem("todos")
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function renderTodos() {
  // todos 화면에 표시
  // all, active, completed
  // 필터링된 todos 배열
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "active") {
      // completed가 false인 todo
      return !todo.completed;
    }
    if (currentFilter === "completed") {
      // completed가 true인 todo
      return todo.completed;
    }
    return true;
  });
  // 필터링된 todos 배열 화면에 보이기(li 태그 작성)
  todoList.innerHTML = "";
  filteredTodos.forEach((todo) => {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todo-item ${todo.completed ? "completed" : ""}">
        <input type='checkbox' class='todo-checkbox' data-id="${todo.id}" ${todo.completed ? "checked" : ""}>
        <span class="todo-title">${todo.title}</span>
        <button class='delete-btn' data-id='${todo.id}'>삭제</button>
        </li>`,
    );
  });
  // 남은 todo 개수
  const activeCount = todos.filter((todo) => {
    // completed가 false인 todo
    return !todo.completed;
  }).length;
  todoCount.textContent = `남은 할 일 : ${activeCount}개`;
}
// 추가버튼 클릭 => submit 이벤트
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 입력한 할 일 가져오기
  const title = input.value.trim();
  if (title === "") {
    alert("할 일을 입력하세요");
    return;
  }
  // Todo 형식으로 객체 생성
  const newTodo = {
    id: Date.now(),
    title: title,
    completed: false,
  };
  // todos 배열에 추가
  todos.push(newTodo);
  // 저장(localStorage)
  saveTodos();
  // 화면에 보여주기
  renderTodos();
  // value란 내용 제거(다음 todo 입력 가능하도록)
  input.value = "";
  // input focus
  input.focus();
});
// 필터버튼 클릭
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // data-filter 속성의 값을 가져오기
    // data-* : dataset.*
    const filter = button.dataset.filter;
    currentFilter = filter;
    renderTodos();
  });
});
// checkbox 클릭시 => 완료
todoList.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.classList.contains("")) return;
  // id 가져오기
  const id = Number(target.dataset.id);
  // todos 에서 일치하는 todo 찾기
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = target.checked;
    saveTodos();
    renderTodos();
  }
});
clearCompleted.addEventListener("click", () => {
  // 완료된 todo 제거
  // todos 배열에서 completed 가 false인 todo를 추출한 후 todo에 저장
  todos = todos.filter((todo) => !todo.completed);
  // localStorage 저장
  saveTodos();
  // 화면 render
  renderTodos();
});
// 최초 실행
renderTodos();
