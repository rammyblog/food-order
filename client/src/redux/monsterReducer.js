import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";

const monsterReducer = combineReducers({
  auth: authReducer,
});

export default monsterReducer;
