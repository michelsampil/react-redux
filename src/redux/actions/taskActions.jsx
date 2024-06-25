import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../types";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});
