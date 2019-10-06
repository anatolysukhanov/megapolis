import {
  TaskListModel,
  TaskRequestModel,
  CreateTaskResponseModel,
  UpdateTaskResponseModel
} from "./models/tasks";

const baseUrl = "https://test.megapolis-it.ru/api/list";

export const getTasks = async (): Promise<TaskListModel> => {
  const response = await fetch(baseUrl);
  return await response.json();
};

export const createTask = async (
  data: TaskRequestModel
): Promise<CreateTaskResponseModel> => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await response.json();
};

export const updateTask = async (
  id: number,
  data: TaskRequestModel
): Promise<UpdateTaskResponseModel> => {
  const response = await fetch(baseUrl + `/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await response.json();
};

export const deleteTask = async (
  id: number
): Promise<UpdateTaskResponseModel> => {
  const response = await fetch(baseUrl + `/${id}`, {
    method: "DELETE"
  });
  return await response.json();
};
