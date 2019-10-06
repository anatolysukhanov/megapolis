import { TaskModel } from "../models/tasks";

import {
  LOAD_TASKS_SUCCESS,
  ADD_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS
} from "../actions/tasks";

const DEFAULT_TASKS_STATE = {
  tasks: []
};

export const taskReducer = (state: any = DEFAULT_TASKS_STATE, action: any) => {
  switch (action.type) {
    case LOAD_TASKS_SUCCESS:
      return {
        tasks: action.payload
      };

    case ADD_TASK_SUCCESS: {
      let newTasks = state.tasks;
      newTasks.push({ ...action.payload });
      return {
        tasks: [...newTasks]
      };
    }

    case UPDATE_TASK_SUCCESS: {
      let newTasks = state.tasks;
      let index = newTasks.findIndex(
        (task: TaskModel) => task.id === action.payload.id
      );
      if (index !== -1) {
        newTasks[index].title = action.payload.title;
        return {
          tasks: [...newTasks]
        };
      } else {
        return state;
      }
    }

    case DELETE_TASK_SUCCESS:
      return {
        tasks: state.tasks.filter(
          (task: TaskModel) => task.id !== action.payload
        )
      };

    default:
      return state;
  }
};
