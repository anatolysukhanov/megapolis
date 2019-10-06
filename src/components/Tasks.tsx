import * as React from "react";

import { Link } from "react-router-dom";

import { TaskModel } from "../models/tasks";
import { removeTask } from "../actions/tasks";

interface TasksProps {
  tasks: Array<TaskModel>;
  dispatch: any;
}

class Tasks extends React.Component<TasksProps> {
  handleDelete = (id: number) => {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  };

  render = (): React.ReactNode => {
    const { tasks } = this.props;
    return (
      <div className="page">
        <div className="wrapper">
          <div className="page-index">
            <div className="header">
              <div className="header-title">
                <h1 className="header-title-entry">Список задач</h1>
              </div>
              <div className="header-adding">
                <Link to="/task">
                  <button className="btn-add-icon">
                    <span className="btn-def-name">Добавить</span>
                    <i className="icon-add-test"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="main">
              {tasks.length > 0 ? (
                <div className="table">
                  {tasks.map((task: TaskModel) => (
                    <div className="table-row" key={task.id}>
                      <div className="table-cell id">{task.id}</div>
                      <div className="table-cell title">{task.title}</div>
                      <div className="table-cell action">
                        <ul className="list inline">
                          <li className="list-item">
                            <Link
                              to={{
                                pathname: "/task/" + task.id,
                                state: { task }
                              }}
                            >
                              <img
                                src="/edit.svg"
                                alt=""
                                height="23px"
                                width="23px"
                              ></img>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={() => this.handleDelete(task.id)}
                            >
                              <img
                                src="/delete.svg"
                                alt=""
                                height="23px"
                                width="23px"
                              ></img>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <span>н/д</span>
              )}
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    );
  };
}

export default Tasks;

//<i className="icon-pen-test"></i>
