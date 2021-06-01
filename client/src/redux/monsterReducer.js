import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";
import foodReducer from "./food/foodReducers";
import cartReducer from "./cart/cartReducers";

const monsterReducer = combineReducers({
  auth: authReducer,
  foods: foodReducer,
  cart: cartReducer,
});

export default monsterReducer;
