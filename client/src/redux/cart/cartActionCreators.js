import * as types from "./cartActionTypes";

export const addToCart = (foodDetails, qty) => {
  return function (dispatch) {
    const payload = { food: foodDetails, qty: Number(qty) };
    dispatch({
      type: types.ADD_TO_CART,
      payload,
    });
  };
};

export const removeFromCart = (id) => {
  return function (dispatch) {
    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: id,
    });
  };
};
