import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// @ts-ignore
import thunk from "redux-thunk";

import "./index.css";

import App from "./containers/App";
import { taskReducer } from "./reducers/tasks";

const store = createStore(taskReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
