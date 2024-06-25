import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskList from "./components/TaskList";
import UserList from "./components/UserList";
import TaskForm from "./components/TaskForm";
import UserForm from "./components/UserForm";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Task and User Manager</h1>
        <div className="columns">
          <div className="column">
            <h2>User List</h2>
            <UserForm />
            <UserList />
          </div>
          <div className="column">
            <h2>Task List</h2>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
