"use client";

import AddForm from "@/components/AddForm";
import EditForm from "@/components/EditForm";
import SearchForm from "@/components/SearchForm";
import TaskList from "@/components/TaskList";
import TaskListSearch from "@/components/TaskListSearch";
import Warning from "@/components/Warning";
import { tasksReducer } from "@/reducer/reducer";
import React, { useEffect, useReducer, useState } from "react";

export interface Task {
  id: string;
  label: string;
  checked: boolean;
}

const Page = () => {
  const [warningActive, setWarningActive] = useState<boolean>(false);
  const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const [tasks, dispatch] = useReducer(tasksReducer, savedTasks);
  const [field, setField] = useState("");
  const [editing, setEditing] = useState(false);
  const [taskEditIndex, setTaskEditIndex] = useState(0);
  // SEARCH
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTasks, setSearchTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchTasks(filtered);
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const listTasksFromLocalStorage = (): Task[] => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks") as string);
  //   return storedTasks || [];
  // };

  // ADICIONAR NOVA TASK
  const addNewTask = () => {
    if (field.trim() !== "") {
      dispatch({
        type: "ADD_NEW_TASK",
        payload: String(field),
      });
      setField("");
      setSearchTerm("");
      setWarningActive(false);
    } else {
      setWarningActive(true);
    }
  };

  // MARCAR TASK COMO CONCLUIDA
  const doneTask = (id: string) => {
    dispatch({
      type: "DONE_TASK",
      payload: id,
    });
  };

  // DELETAR TASK CLICADA
  const deleteTask = (id: string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
    setEditing(false);
  };

  // EDITAR TASK CLICADA
  const cancelUpdateTask = () => {
    setEditing(false);
    setField("");
  };

  const editClickedTask = (id: string) => {
    setEditing(true);
    const taskIndex = tasks.findIndex((item: Task) => item.id === id);
    setTaskEditIndex(taskIndex);
    setField(tasks[taskIndex].label);
    console.log("Changed form to edit form");
  };

  const updateEditTask = () => {
    if (field.trim() !== "") {
      dispatch({
        type: "EDIT_TASK_UPDATE",
        payload: {
          taskIndexReducer: taskEditIndex,
          taskLabelReducer: field,
        },
      });
      setEditing(false);
      setField("");
      setSearchTerm("");
      setWarningActive(false);
    } else {
      setWarningActive(true);
    }
  };

  return (
    <div className="flex flex-col lg:w-1/4 p-3">
      {warningActive && <Warning text="O campo não pode estar vazio!" />}
      <h1 className="mb-4 text-4xl text-center font-mono font-bold">
        Lista de tarefas
      </h1>

      {tasks.length > 0 && (
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}

      {!searchTerm && (
        <TaskList
          data={tasks}
          fDeleteTask={deleteTask}
          fEditTask={editClickedTask}
          fDoneTask={doneTask}
        />
      )}

      {searchTerm && (
        <TaskListSearch
          data={searchTasks}
          fDeleteTask={deleteTask}
          fEditTask={editClickedTask}
        />
      )}

      {!editing && (
        <AddForm field={field} setField={setField} addNewTask={addNewTask} />
      )}

      {editing && (
        <EditForm
          field={field}
          setField={setField}
          cancelUpdateTask={cancelUpdateTask}
          updateEditTask={updateEditTask}
        />
      )}
      <h2 className="mt-5 text-sm text-center mb-5">
        <a
          className="underline font-bold"
          target="_blank"
          href="https://github.com/3lucasrs"
        >
          Lucas Rafael
        </a>
        .
      </h2>
    </div>
  );
};

export default Page;
