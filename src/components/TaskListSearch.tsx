import { Task } from "@/app/page";
import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

interface TaskListProps {
  data: Task[];
  fDeleteTask: (id: string) => void;
  fEditTask: (id: string) => void;
  fDoneTask: (id: string) => void;
}

const TaskListSearch = ({
  data,
  fDeleteTask,
  fEditTask,
  fDoneTask,
}: TaskListProps) => {
  return (
    <ul className="mt-3">
      {data.map((item, index) => (
        <li
          className="w-100 h-12 bg-[#162c50] rounded my-1 flex items-center justify-between px-2"
          key={index}
        >
          <div className="flex justify-center items-center">
            <input
              type="checkbox"
              checked={item.checked}
              readOnly
              className="mr-2 h-4 w-4 rounded-lg"
              onChange={() => fDoneTask(item.id)}
            />
            {item.checked === true ? (
              <span className="line-through text-gray-400">{item.label}</span>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
          <div className="flex flex-row">
            <button
              className="m-1 bg-red-700 h-8 w-8 rounded flex justify-center items-center"
              onClick={() => fDeleteTask(item.id)}
            >
              <FaTrash />
            </button>
            <button
              className="m-1 bg-[#162a49] h-8 w-8 rounded flex justify-center items-center"
              onClick={() => fEditTask(item.id)}
            >
              <FaPen />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskListSearch;
