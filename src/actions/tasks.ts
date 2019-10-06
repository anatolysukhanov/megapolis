import { TaskRequestModel } from "../models/tasks";

import { getTasks, createTask, updateTask, deleteTask } from "../api";

export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS";
export const LOAD_TASKS_ERROR = "LOAD_TASKS_ERROR";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_ERROR = "ADD_TASK_ERROR";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_ERROR = "UPDATE_TASK_ERROR";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_ERROR = "DELETE_TASK_ERROR";

export const loadTasks = () => {
  return (dispatch: any, getState: any) => {
    getTasks().then(
      list => {
        dispatch({ type: LOAD_TASKS_SUCCESS, payload: list.data });
      },
      error => {
        dispatch({
          type: LOAD_TASKS_ERROR,
          payload: error
        });
      }
    );
  };
};

export const addTask = (title: string, history: any = undefined) => {
  return (dispatch: any, getState: any) => {
    createTask({ title } as TaskRequestModel).then(
      response => {
        dispatch({
          type: ADD_TASK_SUCCESS,
          payload: { id: response.id, title }
        });
        if (history) {
          history.push("/tasks");
        }
      },
      error => {
        dispatch({
          type: ADD_TASK_ERROR,
          payload: error
        });
      }
    );
  };
};

export const saveTask = (
  id: number,
  title: string,
  history: any = undefined
) => {
  return (dispatch: any, getState: any) => {
    updateTask(id, { title } as TaskRequestModel).then(
      response => {
        dispatch({ type: UPDATE_TASK_SUCCESS, payload: { id, title } });
        if (history) {
          history.push("/tasks");
        }
      },
      error => {
        dispatch({
          type: UPDATE_TASK_ERROR,
          payload: error
        });
      }
    );
  };
};

export const removeTask = (id: number, history: any = undefined) => {
  return (dispatch: any, getState: any) => {
    deleteTask(id).then(
      response => {
        dispatch({
          type: DELETE_TASK_SUCCESS,
          payload: id
        });
        if (history) {
          history.push("/tasks");
        }
      },
      error => {
        dispatch({
          type: DELETE_TASK_ERROR,
          payload: error
        });
      }
    );
  };
};
