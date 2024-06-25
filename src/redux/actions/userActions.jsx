import { ADD_USER, DELETE_USER, UPDATE_USER } from "../types";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});
