import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";
import foodReducer from "./food/foodReducers";

const monsterReducer = combineReducers({
  auth: authReducer,
  foods: foodReducer
});

export default monsterReducer;
