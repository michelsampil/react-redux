import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/taskActions";
import { selectAllTasks } from "../redux/selectors/taskSelectors";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
