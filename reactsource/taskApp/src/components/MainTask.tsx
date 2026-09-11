import { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const initialTasks: TaskProps[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

let nextId = 3;

const MainTask = () => {
  // 여행계획
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  // 여행계획 추가 함수
  const handleAddTask = (text: string) => {
    // tasks 에 내용 추가
    // tasks.push('') => X
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };
  // 여행계획 수정
  const handleUpdateTask = (task: TaskProps) => {};
  // 여행계획 제거
  const handleRemoveTask = (taskId: number) => {
    // taskId : id
    // tasks 에서 taskId와 일치하지 않는 task 추출해서 새로운 배열로 생성
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  // 여행계획 완료
  const handleDoneTask = (taskId: number) => {
    // taskId와 일치한 task를 찾아서 그 task done 값을 반대로 설정
    const task = tasks.find((t) => t.id === taskId);
    
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white shadow-md">
        <h2 className="text-center text-2xl font-semibold">체코 프라하 여행</h2>
        <AddTask handleAddTask={handleAddTask} />
        <ListTask
          tasks={tasks}
          onEditTask={handleUpdateTask}
          onRemoveTask={handleRemoveTask}
          onToggleTask={handleDoneTask}
        />
      </div>
    </div>
  );
};

export default MainTask;
