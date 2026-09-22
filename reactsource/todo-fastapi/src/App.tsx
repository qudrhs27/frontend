import { useRef } from "react";
import { deleteTodo, postTodo, putTodo } from "./apis/todoApi";
import "./App.css";
import Loading from "./components/Loading";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTeamplate from "./components/TodoTemplate";
import useFetch from "./hooks/useFetch";
import { type TodoCreate } from "./types/todo";

function App() {
  const { todos, loading, fetchData, completedFilter, setCompletedFilter } = useFetch();

  // id 값
  const nextId = useRef(4);

  const onInsert = async (todo: TodoCreate) => {
    const newTodo = { ...todo, id: nextId.current, createDate: new Date(), lastModifiedDate: new Date() };
    console.log("newTodo ", newTodo);

    // 데이터 삽입 서버 요청
    const result = await postTodo(newTodo);

    if (result.message == "success") {
      // 서버로 전체 데이터 요청
      fetchData(completedFilter);

      // 재렌더링이 되어도 값을 유지함
      nextId.current += 1;
    }
  };

  const onDelete = async (id: string) => {
    // todos 에서 삭제된 id와 동일한 todo가 아닌 걸 찾아서 setTodos() 변경
    // filter() => 새로운 배열
    const result = await deleteTodo(id);

    if (result.message == "success") fetchData(completedFilter);
  };

  const onUpdate = async (id: number) => {
    // todos 에서 id 와 동일한 todo 를 찾아서 completed 의 값을 반대로 변경하기
    const updateTodo = todos.find((todo) => todo.id === id);

    if (updateTodo) {
      updateTodo.completed = !updateTodo.completed;
      const result = await putTodo(String(id), updateTodo);
      if (result.message == "success") fetchData(completedFilter);
    }
  };

  // 완료,미완료 선택부분
  const getTodosByCompleted = (completed: string) => {
    setCompletedFilter(completed === "" ? null : completed === "true");
  };

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        {loading ? <Loading /> : <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />}
      </TodoTeamplate>
    </>
  );
}

export default App;
