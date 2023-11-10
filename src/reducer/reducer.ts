import { Task } from "@/app/page";

export const tasksReducer = (state: Task[], action: any) => {
  switch (action.type) {
    case "ADD_NEW_TASK": {
      return [
        ...state,
        {
          id: String(new Date().getTime()),
          label: action.payload,
          checked: false,
        },
      ];
    }

    case "DONE_TASK": {
      const updateTask = [...state];
      const index = updateTask.findIndex((item) => item.id === action.payload);
      updateTask[index].checked = !updateTask[index].checked;
      return updateTask;
    }

    case "DELETE_TASK": {
      return state.filter((state) => state.id !== action.payload);
    }

    case "EDIT_TASK_UPDATE": {
      const { taskIndexReducer, taskLabelReducer } = action.payload;
      let updateTasks = [...state];
      updateTasks[taskIndexReducer].label = taskLabelReducer;
      return updateTasks;
    }
    default: {
      return state;
    }
  }
};
