import * as React from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { TaskModel } from "../models/tasks";
import { loadTasks } from "../actions/tasks";
import { selectTasks } from "../selectors/tasks";

import Tasks from "../components/Tasks";
import Task from "../components/Task";

interface AppProps {
  dispatch: any;
  tasks: Array<TaskModel>;
}

type StateProps = {
  tasks: Array<TaskModel>;
};

type DispatchProps = {
  dispatch: any;
};

class App extends React.Component<AppProps> {
  componentDidMount(): void {
    this.props.dispatch(loadTasks());
  }

  render = (): React.ReactNode => {
    const { tasks, dispatch } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Tasks {...props} tasks={tasks} dispatch={dispatch} />
          )}
        />
        <Route
          path="/tasks"
          render={props => (
            <Tasks {...props} tasks={tasks} dispatch={dispatch} />
          )}
        />
        <Route
          path="/task/:taskId"
          render={props => <Task {...props} dispatch={dispatch} />}
        />
        <Route
          path="/task"
          render={props => <Task {...props} dispatch={dispatch} />}
        />
      </Switch>
    );
  };
}

const mapStateToProps = (state: any): any => {
  return {
    tasks: selectTasks(state)
  };
};

export default connect<StateProps, DispatchProps>(mapStateToProps)(App);
