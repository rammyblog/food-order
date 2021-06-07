import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";
import foodReducer from "./food/foodReducers";
import cartReducer from "./cart/cartReducers";
import userReducer from "./user/userReducers";

const monsterReducer = combineReducers({
  auth: authReducer,
  foods: foodReducer,
  cart: cartReducer,
  user: userReducer,
});

export default monsterReducer;
