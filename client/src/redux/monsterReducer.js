import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";
import foodReducer from "./food/foodReducers";
import cartReducer from "./cart/cartReducers";
import userReducer from "./user/userReducers";
import orderReducer from "./order/orderReducers";

const monsterReducer = combineReducers({
  auth: authReducer,
  foods: foodReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});

export default monsterReducer;
