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

export const clearCart = () => {
  return function (dispatch) {
    dispatch({
      type: types.CLEAR_CART,
    });
  };
};

export const restoreFromLocalStorageAction = () => {
  return function (dispatch) {
    dispatch({
      type: types.RESTORE_CART,
      payload: JSON.parse(localStorage.getItem("foodoCart")),
    });
  };
};

export const restoreFromPrevOrderAction = (payload) => {
  return function (dispatch) {
    localStorage.setItem("foodoCart", JSON.stringify(payload));

    dispatch({
      type: types.RESTORE_CART,
      payload,
    });
  };
};
