import { useEffect, useReducer, useRef, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoTeamplate from "./TodoTemplate";
import { initialTodos, type TodoCreate } from "./todo";
import { todoReducer } from "./todo.reducer";

function TodoMain() {
  // const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // 상단의 "전체","완료","미완료" 보관
  const [completedFilter, setCompletedFilter] = useState<boolean | null>(null);
  const filteredTodos = completedFilter === null ? todos : todos.filter((todo) => todo.completed === completedFilter);

  // id 값
  const nextId = useRef(4);

  const onInsert = (todo: TodoCreate) => {
    const newTodo = { ...todo, id: nextId.current, createDate: new Date(), lastModifiedDate: new Date() };
    console.log("newTodo ", newTodo);

    dispatch({
      type: "INSERT",
      payload: newTodo,
    });
    nextId.current += 1;
  };

  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const onUpdate = (id: number) => {
    dispatch({
      type: "UPDATE",
      payload: id,
    });
  };

  // 완료,미완료 선택부분
  const getTodosByCompleted = (completed: string) => {
    setCompletedFilter(completed === "" ? null : completed === "true");
  };
  // todos 값 확인
  // 컴포넌트 생명주기에 코드를 실행하고 싶을때
  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={filteredTodos} onDelete={onDelete} onUpdate={onUpdate} />
      </TodoTeamplate>
    </>
  );
}

export default TodoMain;
