import { useState } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import type { TaskProps } from "./MainTask";

type TaskListProps = {
  tasks: TaskProps[];
  onEditTask: (task: TaskProps) => void;
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
};

// Omit<타입명, "제거 속성">
type TaskItemProps = Omit<TaskListProps, "tasks"> & {
  task: TaskProps;
};

const ItemTask = ({ task, onEditTask, onRemoveTask, onToggleTask }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(task.done);

  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-3 w-full mr-2">
        <RiCheckboxBlankCircleLine onClick={onToggleTask} />
        {isEditing ? (
          <input type="text" className="border p-2 w-full" value={task.text} />
        ) : (
          <span className="text-gray-800">{task.text}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button type="button" className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800">
            Save
          </button>
        ) : (
          <button type="button" className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800">
            Edit
          </button>
        )}

        <button
          onClick={() => onRemoveTask(task.id)}
          type="button"
          className="rounded border px-3 py-2 text-sm text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ListTask = ({ tasks, onEditTask, onRemoveTask, onToggleTask }: TaskListProps) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <ItemTask task={task} onEditTask={onEditTask} onRemoveTask={onRemoveTask} onToggleTask={onToggleTask} />
      ))}
    </div>
  );
};

export default ListTask;
