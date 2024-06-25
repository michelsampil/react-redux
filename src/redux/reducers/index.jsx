import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer"; // Import other reducers as needed

const rootReducer = combineReducers({
  tasks: taskReducer,
  users: userReducer, // Add other slices of state here
});

export default rootReducer;
