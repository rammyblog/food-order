import * as types from "./cartActionTypes";

export const addToCart = (foodDetails, qty) => {
  return function (dispatch) {
    const payload = { food: foodDetails, qty };
    dispatch({
      type: types.ADD_TO_CART,
      payload,
    });
  };
};
