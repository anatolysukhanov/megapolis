export interface TaskModel {
  id: number;
  title: string;
}

export interface TaskListModel {
  data: Array<TaskModel>;
  length: number;
  success: boolean;
  error: string;
}

export interface TaskRequestModel {
  title: string;
}

export interface CreateTaskResponseModel {
  id: number;
  success: boolean;
  error: string;
}

export interface UpdateTaskResponseModel {
  success: boolean;
  error: string;
}
