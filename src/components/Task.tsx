import * as React from "react";

import { Link } from "react-router-dom";

import { TaskModel } from "../models/tasks";

import { addTask, removeTask, saveTask } from "../actions/tasks";

interface TaskProps {
  history: any;
  location: {
    state: {
      task: TaskModel;
    };
  };
  dispatch: any;
}

interface TaskState {
  title: string;
}

class Task extends React.Component<TaskProps, TaskState> {
  constructor(props: TaskProps) {
    super(props);
    this.state = {
      title: this.props.location.state
        ? this.props.location.state.task.title
        : ""
    };
  }

  handleTextChange = (title: string) => {
    this.setState({ title });
  };

  handleSave = () => {
    if (this.props.location.state !== undefined) {
      const { task } = this.props.location.state;
      const { dispatch, history } = this.props;
      dispatch(saveTask(task.id, this.state.title, history));
    } else {
      const { dispatch, history } = this.props;
      dispatch(addTask(this.state.title, history));
    }
  };

  handleDelete = (id: number) => {
    const { dispatch, history } = this.props;
    dispatch(removeTask(id, history));
  };

  render = (): React.ReactNode => {
    const task = this.props.location.state
      ? this.props.location.state.task
      : { id: 0, title: "" };
    return (
      <div className="page">
        <div className="wrapper">
          <div className="page-index">
            <div className="header">
              <div className="header-title">
                {task.id > 0 ? (
                  <h1 className="header-title-entry">Задача №{task.id}</h1>
                ) : (
                  <h1 className="header-title-entry">Новая задача</h1>
                )}
              </div>
              {task.id > 0 && (
                <div className="header-adding">
                  <button
                    className="btn-delete-icon"
                    onClick={() => this.handleDelete(task.id)}
                  >
                    <span className="btn-def-name">Удалить</span>
                    <i className="icon-del-test"></i>
                  </button>
                </div>
              )}
            </div>
            <div className="main">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="title" className="form-label text">
                    Краткое описание
                  </label>
                  <input
                    type="text"
                    className="form-input text"
                    value={this.state.title}
                    onChange={e => {
                      this.handleTextChange(e.target.value);
                    }}
                  />
                  {this.state.title === "" && (
                    <span className="form-notify">
                      Заголовок не может быть пустым.
                    </span>
                  )}
                </div>
                <div className="form-group">
                  {task.title !== this.state.title && this.state.title !== "" && (
                    <>
                      <button
                        className="btn-add-icon"
                        onClick={this.handleSave}
                      >
                        {task.id > 0 ? (
                          <span className="btn-def-name">Сохранить</span>
                        ) : (
                          <span className="btn-def-name">Создать</span>
                        )}
                      </button>
                      <span></span>{" "}
                    </>
                  )}
                  <Link to="/tasks">
                    <button className="btn-back-icon">
                      <span className="btn-def-name">Вернуться в список</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    );
  };
}

export default Task;
